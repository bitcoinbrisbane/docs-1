import clsx from 'clsx'
import * as ICONS from '../Landing/icons'

export const PowerOverview = () => (
  <section className="flex flex-col gap-5 border-t border-black-10">
    <div className="flex md:flex-row flex-col gap-4">
      <SolutionsGroup
        theme="black"
        heading="Contract Deployments"
        items={[
          {
            icon: 'SequenceIcon',
            title: 'ERC20',
            body: 'Get started with the Sequence platform by following this quick guide to create your first project and get access to all the features available to build your next game or app.',
            link: '/solutions/builder/getting-started',
          },
          {
            icon: 'CollectiblesIcon',
            title: 'ERC721 & 1155',
            body: 'Try out our embedded wallet in a browser with Sequence Kit. Fully customizable, brandable, and available in your favorite game engine or framework.',
            link: '/solutions/collectibles/contracts/deploy-an-item-collection',
          },
          {
            icon: 'CartIcon',
            title: 'Primary Sales',
            body: 'Introducing Jelly Forest: a blockchain-enabled 2D runner game with social sign in, an in-game store, a backend transaction manager and more - all built in Unity using the Sequence platform.',
            link: '/guides/unity-guide',
          },
          {
            icon: 'MinterIcon',
            title: 'Link any contracts',
            body: 'Join our Discord for onboarding, support, share your project, and more!',
            link: 'https://discord.com/invite/sequence',
          },
        ]}
      />
      <SolutionsGroup
        theme="purple"
        heading="Build your game"
        items={[
          {
            icon: 'AnalyticsIcon',
            title: 'Analytics',
            body: 'Track every aspect of web3 activity within your games.',
            link: '/solutions/builder/analytics',
          },
          {
            icon: 'CollectiblesIcon',
            title: 'Metadata Management',
            body: 'Update your collections metadata via a UI or at scale using the metadata API',
            link: '/solutions/wallets/universal-wallet/overview',
          },
          {
            icon: 'IndexerIcon',
            title: 'Indexer',
            body: 'Performantly query wallets and contracts to use in your game or app.',
            link: '/solutions/builder/indexer',
          },
          {
            icon: 'AirdropperIcon',
            title: 'Webhooks',
            body: 'Deploy webhooks that listen to any arbitrary event across blockchains by providing an https callback',
            link: '/solutions/wallets/link-wallets/overview',
          }
        ]}
      />
    </div>
    <div className="flex md:flex-row flex-col gap-4">
      <SolutionsGroup
        theme="green"
        heading="Blockchain Utilities"
        items={[
          {
            icon: 'MarketplaceIcon',
            title: 'Gas Sponsorship',
            body: 'Launch an in-game collectibles marketplace within minutes.',
            link: '/solutions/marketplaces/white-label-marketplace',
          },
          {
            icon: 'NodeGatewayIcon',
            title: 'Node Gateway',
            body: 'Integrate custom in-game marketplaces with our APIs.',
            link: '/solutions/marketplaces/orderbook/overview',
          },
          {
            icon: 'WalletIcon',
            title: 'Transaction Manager',
            body: 'Scalable transactions with batching, access-control, parallelization, automatic reorg management with our transactions API.',
            link: '/solutions/transactions-api/overview',
          },
        ]}
      />
    </div>
  </section>
)

const SolutionsGroup = ({
  heading,
  items,
  theme,
}: {
  heading: string
  items: {
    icon: keyof typeof ICONS
    title: string
    body: string
    link: string
  }[]
  theme: 'purple' | 'green' | 'yellow' | 'black'
}) => {
  return (
    <div className="flex-1 h-fit shrink-0 rounded-xl dark:bg-white-10 bg-white overflow-hidden">
      <div className="flex flex-col gap-3 p-4 relative">
        <div
          className={clsx('absolute inset-0 opacity-20 z-0 pointer-events-none', {
            'dark:bg-gradient-to-b from-[#3400A0] to-transparent': theme === 'purple',
            'dark:bg-gradient-to-b from-[#0A3F16] to-transparent': theme === 'green',
            'dark:bg-gradient-to-b from-[#897031] to-transparent': theme === 'yellow',
            'dark:bg-gradient-to-b from-[#000000] to-transparent': theme === 'black',
          })}
        />
        <p className="px-4 font-bold text-themed-primary z-10">{heading}</p>
        {items.map((item, index) => {
          const IconComponent = ICONS[item.icon]

          return (
            <a
              key={index}
              href={item.link}
              className="hover-fade p-4 rounded-md z-10 dark:bg-white-10 bg-black-7"
            >
              <div className="flex gap-2">
                <p className="flex items-start gap-2 text-xl leading-7 font-bold text-themed-primary">
                  <span className="mt-1">
                    <IconComponent />
                  </span>
                  {item.title}
                </p>
              </div>
              <p className="text-themed-secondary text-sm font-medium">{item.body}</p>
            </a>
          )
        })}
      </div>
    </div>
  )
}
