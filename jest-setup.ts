import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';

if (typeof window.URL.createObjectURL === 'undefined') {
  window.URL.createObjectURL = () => {
    // Do nothing
    return '';
  };
}
