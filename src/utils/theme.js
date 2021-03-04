const themeFile = {
    palette: {
        primary: {
          light: '#109CF1',
          main: '#109CF1',
          dark: '#008394',
          contrastText: '#fff'
        },
        secondary: {
          light: '#ff6333',
          main: '#CA100E',
          dark: '#b22a00',
          contrastText: '#fff'
        },
        third: {
          light: '#CA100E',
          main: '#CA100E',
          dark: '#CA100E',
          contrastText: '#fff'
        }
      },

      typography: {
        fontFamily: "'Poppins', sans-serif",

      },

      breakpoints: {
        values: {
         xs: 0,
         sm: 480,
         md: 600,
         lg: 900,
         xl: 1200,
         tablet:1024
       }
    },


    overrides: {
      MUIDataTable: {
        responsiveScroll: {
          maxHeight: "580px"
          // overflowY: 'scroll',
        }
      },
      MUIDataTableBodyCell: {
        root: {

        }
      }
    }
}

export default  themeFile;