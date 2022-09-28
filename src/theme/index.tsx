const theme = {
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
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125
    },
    colors: {
      text: '#222222',
      background: '#FFFEFC',
      primary: '#93a5cf',
      secondary: '#e4efe9',
      muted: '#f4f2ee'
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
      }
    }
  }
  
  export default theme