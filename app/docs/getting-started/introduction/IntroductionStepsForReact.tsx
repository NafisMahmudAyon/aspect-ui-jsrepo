import CodeSnippet from '@/components/CodeSnippet'
import { Timeline, TimelineItem } from '@/app/src'
import { keepInstall, twConfigForReact, twCssForReact, twNpmInstall, viteReact } from './Code/Code'

const IntroductionStepsForReact = () => {
  return (
    <Timeline position='right' className="my-12 ml-2">
      <TimelineItem className="max-w-full relative" containerClassName='bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent shadow-none' dotClassName="top-0">
        <div>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 1</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Create a Vite React Application</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Replace `my-project` with your preferred project name.
          </p>
          <div className="!my-4">
            <CodeSnippet content={viteReact} />
          </div>
        </div>
      </TimelineItem>
      <TimelineItem className="max-w-full relative" containerClassName='bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent shadow-none' dotClassName="top-0">
        <div>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 2</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Install Tailwind CSS</h1>
          <div className="!my-4">
            <CodeSnippet content={twNpmInstall} />
          </div>
        </div>
      </TimelineItem>
      <TimelineItem className="max-w-full relative" containerClassName='bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent shadow-none' dotClassName="top-0">
        <div>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 3</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Install Keep React library</h1>
          <div className="!my-4">
            <CodeSnippet content={keepInstall} />
          </div>
        </div>
      </TimelineItem>
      <TimelineItem className="max-w-full relative" containerClassName='bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent shadow-none' dotClassName="top-0">
        <div>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 4</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Configure Tailwind CSS</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Open the `tailwind.config.js` file in your project. Wrap your config with the keepTheme function to achieve
            keep-react configuration.
          </p>
          <div className="!my-4">
            <CodeSnippet content={twConfigForReact} />
          </div>
        </div>
      </TimelineItem>
      <TimelineItem className="max-w-full relative" containerClassName='bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent shadow-none' dotClassName="top-0">
        <div>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 5</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Add Tailwind CSS to index.css</h1>
          <div className="!my-4">
            <CodeSnippet content={twCssForReact} />
          </div>
        </div>
      </TimelineItem>
    </Timeline>
  )
}

export default IntroductionStepsForReact
