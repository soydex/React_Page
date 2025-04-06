import { useTheme } from '../contexts/ThemeContext';

const Card = ({ title, children, footer }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`${isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'} rounded-lg shadow-md overflow-hidden`}>
      {title && (
        <div className={`px-6 py-4 ${isDark ? 'border-b border-gray-700' : 'border-b border-gray-200'}`}>
          <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{title}</h3>
        </div>
      )}
      
      <div className="px-6 py-4">
        {children}
      </div>
      
      {footer && (
        <div className={`px-6 py-4 ${isDark ? 'bg-gray-700 border-t border-gray-700' : 'bg-gray-50 border-t border-gray-200'}`}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;