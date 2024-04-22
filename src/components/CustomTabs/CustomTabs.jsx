import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";

function CustomTabs({ activeTab, onChange }) {
  const data = [
    {
      label: "Vista Previa",
      value: "Vista Previa",
    },
    {
      label: "Texto Extraído",
      value: "Texto Extraído",
    },
  ];

  const handleTabClick = (value) => onChange(value);

  return (
    <Tabs value={activeTab}>
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} onClick={() => handleTabClick(value)}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      {/* <TabsBody></TabsBody> */}
    </Tabs>
  );
}

export default CustomTabs;
