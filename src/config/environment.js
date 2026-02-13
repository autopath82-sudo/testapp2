const environments = {
  development: {
    apiUrl: process.env.REACT_APP_DEV_API_URL ?? 'http://localhost:3000/api',
    debug: process.env.REACT_APP_DEV_DEBUG === 'true',
    theme: {
      colors: {
        brown: {
          900: '#4E342E',
        },
        cream: '#FFFDD0',
        beige: '#F5F5DC',
        gold: {
          500: '#FFD700',
          600: '#FFC107',
          300: '#FFECB3',
          400: '#FFD54F',
        },
      },
      typography: {
        fontFamily: {
          serif: ['Merriweather', 'serif'],
          sans: ['Open Sans', 'sans-serif'],
        },
        fontSize: {
          base: '16px',
          lg: '18px',
          xl: '20px',
          '2xl': '24px',
          '3xl': '30px',
          '4xl': '36px',
          '5xl': '48px',
        },
      },
    },
  },
  production: {
    apiUrl: process.env.REACT_APP_PROD_API_URL ?? 'https://api.roastandrelax.com',
    debug: process.env.REACT_APP_PROD_DEBUG === 'true',
    theme: {
      colors: {
        brown: {
          900: '#4E342E',
        },
        cream: '#FFFDD0',
        beige: '#F5F5DC',
        gold: {
          500: '#FFD700',
          600: '#FFC107',
          300: '#FFECB3',
          400: '#FFD54F',
        },
      },
      typography: {
        fontFamily: {
          serif: ['Merriweather', 'serif'],
          sans: ['Open Sans', 'sans-serif'],
        },
        fontSize: {
          base: '16px',
          lg: '18px',
          xl: '20px',
          '2xl': '24px',
          '3xl': '30px',
          '4xl': '36px',
          '5xl': '48px',
        },
      },
    },
  },
  test: {
    apiUrl: process.env.REACT_APP_TEST_API_URL ?? 'http://localhost:3000/api',
    debug: process.env.REACT_APP_TEST_DEBUG === 'true',
    theme: {
      colors: {
        brown: {
          900: '#4E342E',
        },
        cream: '#FFFDD0',
        beige: '#F5F5DC',
        gold: {
          500: '#FFD700',
          600: '#FFC107',
          300: '#FFECB3',
          400: '#FFD54F',
        },
      },
      typography: {
        fontFamily: {
          serif: ['Merriweather', 'serif'],
          sans: ['Open Sans', 'sans-serif'],
        },
        fontSize: {
          base: '16px',
          lg: '18px',
          xl: '20px',
          '2xl': '24px',
          '3xl': '30px',
          '4xl': '36px',
          '5xl': '48px',
        },
      },
    },
  },
};

const getEnvironmentConfig = () => {
  const env = process.env.NODE_ENV || 'development';
  return environments[env] ?? environments.development;
};

export default getEnvironmentConfig();