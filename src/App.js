import React from "react";
import { Box, Txt, LineChart, SparkLines, Button } from "snowbox-ui";
import { demo_line1, demo_line2 } from "./demoData";

export default () => (
  <>
    <Box bg="Blu011">
      <Box m={20} p={20} flex={1} bg="Blu014" bw={1} bc="Blu010">
        <Box c h={100} bg="Blu010" w="100%" DIN>
          Box 盒子模型
        </Box>
      </Box>
    </Box>
    <Box mx={20}>
      {/* 文字 */}
      <Txt f={18}>18.</Txt>
      <Txt f={14}>14.</Txt>
      <Txt f={10}>10.</Txt>
      {/* 定位 */}
      <Box m={20} h={120} w={120}>
        <Box ab l={0} t={50} w={50} h={50} bg="Blu014" />
        <Box ab l={50} t={50} w={50} h={50} bg="Blu010" />
        <Box ab l={50} t={0} w={50} h={50} bg="Blu011" />
      </Box>
      {/* 趋势图 */}
      <SparkLines data={[demo_line1, demo_line2]} />
    </Box>
    <Box m={20}>
      <Button onPress={() => {}}>按钮</Button>
      <Button ml={10} onPress={() => {}} loading>
        加载中
      </Button>
    </Box>
    <Box p={12}>
      <LineChart
        data={[demo_line1, demo_line2]}
        fill={["red"]}
        shadowDirection={2}
        hasLabelPercent={true}
      />
    </Box>
  </>
);
