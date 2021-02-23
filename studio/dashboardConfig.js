export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-project-studio-nzncamte',
                  apiId: 'a63d9b12-10b4-4c97-887c-538e3359dd0e'
                },
                {
                  buildHookId: '6034fded5efb310c7e8324ad',
                  title: 'Events Website',
                  name: 'sanity-nuxt-project-web',
                  apiId: 'd46255e1-9d45-4eaa-8e39-517b6d32a79c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ellinor-Carlberg/sanity-nuxt-project',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-project-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
