

import { Fragment } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Box className={`bg-slate-800 h-screen w-full`}>
  <Tabs className={`text-white w-[35%]  pt-8 pl-4 `}>
  <TabList>
  <Tab className={`mx-2 text-slate-600 text-xs font-bold`}>
  {`First Tab`}
</Tab>
  <Tab className={`mx-2 text-slate-600 text-xs font-bold`}>
  {`Second Tab`}
</Tab>
  <Tab className={`mx-2 text-slate-600 text-xs font-bold`}>
  {`Third Tab`}
</Tab>
</TabList>
  <TabPanels className={`mt-3`}>
  <TabPanel>
  <Text className={`text-slate-500`}>
  {`☝️ Welcome to the content that you can only see inside the first Tab.`}
</Text>
</TabPanel>
  <TabPanel>
  <Text className={`text-slate-500`}>
  {`✌️ Here’s content that’s only inside the second Tab.`}
</Text>
</TabPanel>
  <TabPanel>
  <Text className={`text-slate-500`}>
  {`💪 Here’s content that’s only inside the third Tab.`}
</Text>
</TabPanel>
</TabPanels>
</Tabs>
</Box>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
