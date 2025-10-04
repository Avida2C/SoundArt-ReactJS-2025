/**
 * Validation utility functions
 */

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} - Validation result with score and feedback
 */
export const validatePassword = (password) => {
  const result = {
    score: 0,
    feedback: [],
    isValid: false
  };

  if (password.length < 8) {
    result.feedback.push('Password must be at least 8 characters long');
  } else {
    result.score += 1;
  }

  if (!/[a-z]/.test(password)) {
    result.feedback.push('Password must contain at least one lowercase letter');
  } else {
    result.score += 1;
  }

  if (!/[A-Z]/.test(password)) {
    result.feedback.push('Password must contain at least one uppercase letter');
  } else {
    result.score += 1;
  }

  if (!/\d/.test(password)) {
    result.feedback.push('Password must contain at least one number');
  } else {
    result.score += 1;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    result.feedback.push('Password must contain at least one special character');
  } else {
    result.score += 1;
  }

  result.isValid = result.score >= 4;
  return result;
};

/**
 * Validate form data
 * @param {object} data - Form data to validate
 * @param {object} rules - Validation rules
 * @returns {object} - Validation result
 */
export const validateForm = (data, rules) => {
  const errors = {};
  let isValid = true;

  for (const field in rules) {
    const value = data[field];
    const fieldRules = rules[field];

    // Required validation
    if (fieldRules.required && (!value || value.toString().trim() === '')) {
      errors[field] = fieldRules.required;
      isValid = false;
      continue;
    }

    // Skip other validations if field is empty and not required
    if (!value || value.toString().trim() === '') {
      continue;
    }

    // Email validation
    if (fieldRules.email && !isValidEmail(value)) {
      errors[field] = fieldRules.email;
      isValid = false;
    }

    // Phone validation
    if (fieldRules.phone && !isValidPhone(value)) {
      errors[field] = fieldRules.phone;
      isValid = false;
    }

    // URL validation
    if (fieldRules.url && !isValidUrl(value)) {
      errors[field] = fieldRules.url;
      isValid = false;
    }

    // Min length validation
    if (fieldRules.minLength && value.length < fieldRules.minLength) {
      errors[field] = fieldRules.minLength;
      isValid = false;
    }

    // Max length validation
    if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
      errors[field] = fieldRules.maxLength;
      isValid = false;
    }

    // Pattern validation
    if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
      errors[field] = fieldRules.patternMessage || 'Invalid format';
      isValid = false;
    }

    // Custom validation
    if (fieldRules.custom && typeof fieldRules.custom === 'function') {
      const customError = fieldRules.custom(value, data);
      if (customError) {
        errors[field] = customError;
        isValid = false;
      }
    }
  }

  return { errors, isValid };
};
