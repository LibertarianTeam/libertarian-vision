export default {
  state: {
    links: {
      gab: "https://gab.ai/ancapsu",
      minds: "https://minds.com/ancapsu",
      twitter: "https://twitter.com/ancapsu",
      youtube: "https://youtube.com/ancapsu",
      bitchute: "https://bitchute.com/ancapsu",
      facebook: "https://facebook.com/pageancapsu"
    },
    navItems: {
      video: {
        text: "Vídeos",
        to: { name: "Category", params: { category: "video", filter: "all" } },
        items: [
          {
            text: "Teoria libertária",
            to: {
              name: "Category",
              params: { category: "video", filter: "theory" }
            }
          },
          {
            text: "Visão libertária",
            to: {
              name: "Category",
              params: { category: "video", filter: "news" }
            }
          },
          {
            text: "Cômicos",
            to: {
              name: "Category",
              params: { category: "video", filter: "comic" }
            }
          },
          {
            text: "Procurar",
            to: {
              name: "Category",
              params: { category: "video", filter: "search" }
            }
          }
        ]
      },
      matter: {
        text: "Metérias",
        to: { name: "Category", params: { category: "matter", filter: "all" } },
        items: [
          {
            text: "Artigos",
            to: {
              name: "Category",
              params: { category: "matter", filter: "article" }
            }
          },
          {
            text: "Tapas",
            to: {
              name: "Category",
              params: { category: "matter", filter: "shortnote" }
            }
          },
          {
            text: "Crônicas",
            to: {
              name: "Category",
              params: { category: "matter", filter: "chronicle" }
            }
          },
          {
            text: "Procurar",
            to: {
              name: "Category",
              params: { category: "matter", filter: "search" }
            }
          }
        ]
      },
      schedule: {
        text: "Pautas",
        to: {
          name: "Category",
          params: { category: "schedule", filter: "all" }
        },
        items: [
          {
            text: "Últimas pautas",
            to: {
              name: "Category",
              params: { category: "schedule", filter: "news" }
            }
          },
          {
            text: "Procurar",
            to: {
              name: "Category",
              params: { category: "schedule", filter: "search" }
            }
          }
        ]
      },
      other: {
        text: "Sobre",
        to: { name: "About" },
        items: [
          {
            text: "Ajuda",
            to: { name: "Help" }
          }
        ]
      }
    }
  },
  getters: {
    sideNavItems({ navItems }) {
      const customNavItems = JSON.parse(JSON.stringify(navItems));

      Object.keys(navItems).forEach(item => {
        const { text, to } = navItems[item];
        customNavItems[item].items.unshift({ text, to });
      });

      return customNavItems;
    }
  },
  namespaced: true
};
