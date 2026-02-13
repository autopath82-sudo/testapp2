const environments = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    debug: true,
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
    apiUrl: 'https://api.roastandrelax.com',
    debug: false,
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
    apiUrl: 'http://localhost:3000/api',
    debug: true,
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