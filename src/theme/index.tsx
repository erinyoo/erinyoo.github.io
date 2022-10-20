const theme = {
  layoutBreakpoints: { sm: 385, md: 780, lg: 1024, xlg: 1500 },
  space: [
    0,
    4,
    8,
    16,
    24,
    32,
    64,
    72,
    80,
    120,
    160,
    200,
    256,
    512
  ],
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
  },
  fontSizes: [
    12,
    14,
    16,
    18,
    20,
    24,
    30,
    36,
    48,
    60,
    72
  ],
  fontWeights: {
    body: 400,
    titles: 520,
    header: 620,
    bold: 520,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#24191C',
    background: '#FFFEFC',
    primary: '#24191C',
    secondary: '#AD999F',
    muted: '#DAD0D3',
    active: '#C81047',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    },
    cards: {
      primary: {
        padding: 2,
        borderRadius: 4,
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.125)',
      },
      compact: {
        padding: 1,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'muted',
      },
    },
  }
}

export default theme