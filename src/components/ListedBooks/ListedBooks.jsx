import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  return (
    <div>
      <h3 className="text-3xl my-4">Listed Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
