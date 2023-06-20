const theme = {
  space: [
    4,
    8,
    12,
    16,
    24,
    32,
    48,
    64,
    72,
    80,
    100,
    112,
    120,
    140,
  ],
  fonts: {
    inter: 'Inter, sans-serif',
  },
  fontSizes: [
    10,
    12,
    16,
    24,
    40,
    64
  ],
  fontWeights: {
    normal: 400,
    body: 450,
    bold: 600,
  },
  lineHeights: {
    title: '77px',
    h2: '48px',
    h3: '29px',
    body: '22px',
  },
  letterSpacings: {
    title: -0.02,
    h2: -0.01,
  },
  colors: {
    background: '#FCFAFA',
    text: '#1B1810',
    subtle: '#8B8A89',
    accent: '#F0ECE8',
    accentBorder: '#DED5CD',
    alert: '#EE2D2D',
    blue: '#758DF9',
    green: '#B1E463',
    pink: '#FF6D88',
    orange: '#FFB865',
    purple: '#CC99F3',
  },
  styles: {
    root: {
      fontFamily: 'inter',
      fontWeight: 'body'
    },
    h1: {
      color: 'text',
      fontFamily: 'inter',
      letterSpacing: 'title',
      fontWeight: 'bold',
      fontSize: 5
    },
    h2: {
      color: 'text',
      fontFamily: 'inter',
      letterSpacing: 'h2',
      fontWeight: 'bold',
      fontSize: 4
    },
    h3: {
      color: 'text',
      fontFamily: 'inter',
      fontWeight: 'bold',
      fontSize: 3
    },
    a: {
      color: 'text',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    img: {
      maxWidth: '100%'
    },
  }
}

export default theme