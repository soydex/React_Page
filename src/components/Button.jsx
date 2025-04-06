import { useTheme } from '../contexts/ThemeContext';

const Button = ({ children, variant = 'primary', size = 'md', onClick }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Variant styles with dark mode support
  const variantClasses = {
    primary: `${isDark ? 'bg-blue-700 hover:bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'} text-white`,
    secondary: `${isDark ? 'bg-gray-700 hover:bg-gray-800' : 'bg-gray-600 hover:bg-gray-700'} text-white`,
    success: `${isDark ? 'bg-green-700 hover:bg-green-800' : 'bg-green-600 hover:bg-green-700'} text-white`,
    danger: `${isDark ? 'bg-red-700 hover:bg-red-800' : 'bg-red-600 hover:bg-red-700'} text-white`,
    warning: `${isDark ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-500 hover:bg-yellow-600'} text-white`,
    outline: isDark 
      ? 'bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20' 
      : 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  // Size styles
  const sizeClasses = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 
      ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;