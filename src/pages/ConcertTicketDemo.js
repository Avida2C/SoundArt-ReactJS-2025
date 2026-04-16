import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import concertsData from "../data/concertsData";
import { useAuth } from "../contexts/AuthContext";
import { HeroSection, SectionTitle } from "../components/layout";
import { usePageTitle } from "../hooks";

export default function ConcertTicketDemo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const concertId = Number(id);
  const concert = concertsData.find((c) => c.id === concertId);

  const [selectedSection, setSelectedSection] = useState("FC");
  const [quantity, setQuantity] = useState(2);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  usePageTitle(concert ? `Tickets · ${concert.artist}` : "Tickets");

  const parseBasePrice = (priceValue) => {
    if (!priceValue) return 0;
    const numericParts = String(priceValue)
      .match(/\d+/g)
      ?.map((value) => Number(value))
      .filter((value) => Number.isFinite(value));

    if (!numericParts || numericParts.length === 0) return 0;
    if (numericParts.length === 1) return numericParts[0];

    const min = Math.min(...numericParts);
    // Keep demo prices realistic and approachable.
    return min * 0.6;
  };

  const basePrice = parseBasePrice(concert?.price);
  const formatPrice = (value) =>
    Number(value).toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const sectionConfig = {
    FL: {
      label: "Front Left – next to stage",
      description: "Closest to the stage on the left side, very high energy.",
      multiplier: 0.9,
    },
    FC: {
      label: "Front Center – in front of stage",
      description: "Directly facing the stage with the most immersive view.",
      multiplier: 1.0,
    },
    FR: {
      label: "Front Right – next to stage",
      description: "Closest to the stage on the right side, very high energy.",
      multiplier: 0.9,
    },
    FCL: {
      label: "Front Center Left – floor",
      description: "Just off center on the left, great mix of view and space.",
      multiplier: 0.8,
    },
    MC: {
      label: "Mid Center – floor",
      description: "Centered view a little further back, great for sound.",
      multiplier: 0.85,
    },
    FCR: {
      label: "Front Center Right – floor",
      description: "Just off center on the right, great mix of view and space.",
      multiplier: 0.8,
    },
    MCL: {
      label: "Mid Center Left – floor",
      description: "Near the center with a slight left offset for a wider perspective.",
      multiplier: 0.75,
    },
    MCR: {
      label: "Mid Center Right – floor",
      description: "Near the center with a slight right offset for a wider perspective.",
      multiplier: 0.75,
    },
    BS: {
      label: "Back Stands – elevated",
      description: "Higher up with a full view of the crowd and stage.",
      multiplier: 0.63,
    },
  };

  const currentSection = sectionConfig[selectedSection] || sectionConfig.FC;
  const totalPrice = basePrice * currentSection.multiplier * quantity;

  if (!concert) {
    return (
      <div>
        <HeroSection
          title="Concert Not Found"
          titleHighlight="SoundArt"
          description="We couldn't find details for this concert."
        />
        <section className="py-4 bg-light">
          <div className="container">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="mb-3">This ticket link is no longer valid.</h5>
                <p className="text-muted mb-4">
                  Please return to concerts and choose an available event.
                </p>
                <Link to="/concerts" className="btn btn-warning">
                  Back to concerts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!concert) {
      return;
    }
    if (!firstName || !lastName || !email || !phone) {
      return;
    }
    if (!isAuthenticated) {
      navigate("/social");
      return;
    }
    if (!agreed || quantity <= 0) {
      return;
    }
    setConfirmed(true);
  };

  return (
    <div>
      <HeroSection
        title={concert.artist}
        titleHighlight="SoundArt"
        description={`Tickets for ${concert.venue}, ${concert.city}`}
      />

      <section className="py-4 bg-light">
        <div className="container">
          <div className="mb-2">
            <SectionTitle
              title={confirmed ? "Booking Confirmed" : "Choose Your Section"}
              subtitle={
                confirmed
                  ? "Your seats have been reserved for this concert."
                  : "Pick a section and quantity to see your estimated total for this concert."
              }
            />
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7 order-2 order-lg-1">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  {!confirmed ? (
                    <form onSubmit={handleSubmit}>
                      <h5 className="mb-3">Tickets & section</h5>

                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-semibold">Stage</span>
                          <span className="badge bg-light text-dark">
                            You&apos;re facing the stage
                          </span>
                        </div>
                        <div className="d-flex flex-column align-items-center gap-1 mb-2">
                          {/* Front row: FL [STAGE] FR */}
                          <div className="d-flex justify-content-center align-items-center gap-2">
                            {["FL", "STAGE", "FR"].map((item) => {
                              if (item === "STAGE") {
                                return (
                                  <div
                                    key="STAGE"
                                    className="rounded-1 small text-center text-white d-flex align-items-center justify-content-center"
                                    style={{
                                      width: 96,
                                      height: 48,
                                      background:
                                        "linear-gradient(135deg, rgba(255,189,46,0.95) 0%, rgba(255,143,0,0.95) 60%, rgba(255,189,46,0.95) 100%)",
                                      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                                      letterSpacing: "0.08em",
                                      cursor: "default",
                                      userSelect: "none",
                                    }}
                                    aria-hidden="true"
                                  >
                                    STAGE
                                  </div>
                                );
                              }

                              const id = item;
                              const isActive = id === selectedSection;
                              const cfg = sectionConfig[id];
                              if (!cfg) return null;

                              return (
                                <button
                                  key={id}
                                  type="button"
                                  className={
                                    "btn btn-sm px-3 py-2" +
                                    (isActive
                                      ? " btn-warning"
                                      : " btn-outline-secondary")
                                  }
                                  onClick={() => setSelectedSection(id)}
                                >
                                  <strong>{id}</strong>
                                </button>
                              );
                            })}
                          </div>

                          {/* Second and following rows */}
                          {[
                            ["FCL", "FC", "FCR"],
                            ["MCL", "MC", "MCR"],
                            ["BS"],
                          ].map((row, rowIndex) => (
                            <div
                              key={rowIndex}
                              className="d-flex justify-content-center gap-2"
                            >
                              {row.map((id) => {
                                const isActive = id === selectedSection;
                                const cfg = sectionConfig[id];
                                if (!cfg) return null;
                                const isBackStands = id === "BS";
                                const isMidCenter = id === "MC";
                                const isFrontCenter = id === "FC";
                                const isMidSides =
                                  id === "FCL" || id === "FCR" || id === "MCL" || id === "MCR";
                                return (
                                  <button
                                    key={id}
                                    type="button"
                                    className={
                                      "btn btn-sm py-2" +
                                      (isActive
                                        ? " btn-warning"
                                        : " btn-outline-secondary")
                                    }
                                    style={
                                      isBackStands
                                        ? { minWidth: 200, height: 48 }
                                        : isFrontCenter || isMidSides || isMidCenter
                                        ? { minWidth: 96, height: 72 }
                                        : { minWidth: 60, paddingInline: 12, height: 40 }
                                    }
                                    onClick={() => setSelectedSection(id)}
                                  >
                                    <strong>{id}</strong>
                                  </button>
                                );
                              })}
                            </div>
                          ))}
                        </div>

                        <p className="small text-muted mb-3 text-center">
                          <strong>{currentSection.label}</strong> –{" "}
                          {currentSection.description}
                        </p>

                        <div className="row g-3 align-items-end">
                          <div className="col-12 col-md-6">
                            <label
                              className="form-label fw-semibold sa-form-label"
                              htmlFor="ticket-quantity"
                            >
                              Tickets in section {selectedSection}
                            </label>
                            <input
                              type="number"
                              className="form-control sa-form-control"
                              id="ticket-quantity"
                              name="ticketQuantity"
                              autoComplete="off"
                              min={1}
                              max={10}
                              value={quantity}
                              onChange={(e) =>
                                setQuantity(
                                  Math.min(
                                    10,
                                    Math.max(1, Number(e.target.value) || 1)
                                  )
                                )
                              }
                            />
                            <div className="mt-2 text-danger fw-bold">
                              Total: {formatPrice(totalPrice)}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Booking details (after ticket selection) */}
                      <div className="mt-4">
                        <h6 className="mb-3">Booking details</h6>

                        <div className="mb-3">
                          <label
                            className="form-label fw-semibold sa-form-label"
                            htmlFor="booking-first-name"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            className="form-control sa-form-control"
                            id="booking-first-name"
                            name="firstName"
                            autoComplete="given-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Alex"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            className="form-label fw-semibold sa-form-label"
                            htmlFor="booking-last-name"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            className="form-control sa-form-control"
                            id="booking-last-name"
                            name="lastName"
                            autoComplete="family-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Johnson"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            className="form-label fw-semibold sa-form-label"
                            htmlFor="booking-email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control sa-form-control"
                            id="booking-email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            className="form-label fw-semibold sa-form-label"
                            htmlFor="booking-phone"
                          >
                            Mobile number
                          </label>
                          <input
                            type="tel"
                            className="form-control sa-form-control"
                            id="booking-phone"
                            name="phone"
                            autoComplete="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+356 99 123 123"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="agreeDemo"
                          name="agreeDemo"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <label
                          className="form-check-label text-muted"
                          htmlFor="agreeDemo"
                        >
                          I understand this is a simulated checkout and no real purchase
                          is being made.
                        </label>
                      </div>

                      {!isAuthenticated && (
                        <p className="text-muted small mb-3">
                          You&apos;ll be redirected to the community sign-in page
                          before confirming.
                        </p>
                      )}

                      <div className="d-flex flex-column flex-md-row gap-2 justify-content-between align-items-stretch align-items-md-center">
                        <button
                          type="submit"
                          className="btn btn-warning flex-fill flex-md-grow-0"
                          disabled={!agreed || quantity <= 0}
                        >
                          Confirm Booking
                        </button>
                        <Link
                          to="/concerts"
                          className="btn btn-outline-secondary flex-fill flex-md-grow-0 sa-back-to-concerts-btn"
                        >
                          Back to concerts
                        </Link>
                      </div>
                    </form>
                  ) : (
                    <>
                      <h5 className="mb-3">
                        You&apos;re all set for{" "}
                        <span className="text-warning">{concert.artist}</span>!
                      </h5>
                      <p className="text-muted mb-3">
                        Your booking is confirmed. Your tickets and full order details
                        will be sent to your account email shortly.
                      </p>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2">
                          <i className="bi bi-calendar me-2"></i>
                          <strong>Date:</strong> {concert.date}
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-geo-alt me-2"></i>
                          <strong>Venue:</strong> {concert.venue}, {concert.city}
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-person me-2"></i>
                          <strong>Name:</strong> {firstName} {lastName}
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-envelope me-2"></i>
                          <strong>Email:</strong> {email}
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-telephone me-2"></i>
                          <strong>Mobile:</strong> {phone}
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-ticket-perforated me-2"></i>
                          <strong>Section:</strong> {currentSection.label} &middot;{" "}
                          {quantity} ticket{quantity !== 1 ? "s" : ""}
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-currency-dollar me-2"></i>
                          <strong>Total:</strong> {formatPrice(totalPrice)}
                        </li>
                      </ul>
                      <button
                        className="btn btn-warning"
                        onClick={() => navigate("/concerts")}
                      >
                        Browse more concerts
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-5 order-1 order-lg-2">
              <div className="card border-0 shadow-sm mb-4 h-100">
                <img
                  src={concert.image}
                  className="card-img-top"
                  alt={concert.artist}
                  style={{ height: "260px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">{concert.artist}</h5>
                  <p className="text-muted mb-2">
                    {concert.venue} · {concert.city}
                  </p>
                  <p className="text-muted small mb-0">
                    {concert.description}
                  </p>
                  <hr className="my-3" />
                  {!confirmed ? (
                    <>
                      <h6 className="mb-2">Stand Prices</h6>
                      <div className="small">
                        {Object.entries(sectionConfig).map(([sectionCode, section]) => (
                          <div
                            key={sectionCode}
                            className="d-flex justify-content-between align-items-center mb-1"
                          >
                            <span className="text-muted">
                              {sectionCode} - {section.label}
                            </span>
                            <strong>
                              {formatPrice(basePrice * section.multiplier)}
                            </strong>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h6 className="mb-2">Booking Summary</h6>
                      <div className="small">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="text-muted">Section</span>
                          <strong>{selectedSection}</strong>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="text-muted">Tickets</span>
                          <strong>
                            {quantity} ticket{quantity !== 1 ? "s" : ""}
                          </strong>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="text-muted">Name</span>
                          <strong>
                            {firstName} {lastName}
                          </strong>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-muted">Total</span>
                          <strong>{formatPrice(totalPrice)}</strong>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

