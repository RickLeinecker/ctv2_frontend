import React from "react";
import styled from "@emotion/styled";
import { Grid, Flex, Button, TextInput, ActionIcon } from "@mantine/core";
import { DateRangePickerValue } from "@mantine/dates";

// FIXME: Need to get rid of or make optional title and organization here
export interface OpportunityItem {
  UID?: string;
  idposts?: number;
  keyword?: string;
  title?: string;
  organization?: string;
  link?: string;
  description?: string;
  date_posted?: Date | string | number;
  city?: string;
  state?: string;
  // end_date: Date | string | number;
  end_date?: Date | string | number;
  salary?: string | number;
  job_type?: string;
  winner?: string | null;
  competition_category?: string;
  job_category?: string;
  address?: string;
  is_deleted?: string | number;
  is_flagged?: string | number;
  type?: string;
  // start_date?: Date | string | number;
  start_date?: Date | string | number;
}

interface PaginationCard {
  selected: boolean;
}

interface GridContainer {
  medianScreen: boolean;
}

interface FilterIcon {
  isFilter: boolean;
}

export const PageContainer = styled(Flex)`
  height: 50vh;
  width: 100vw;
  border: 2px solid black;
`;

export const OpportunityPageContainer = styled.div`
  margin-top: 30px;
  height: 84vh;
`;

export const GridContainer = styled.div<GridContainer>`
  // padding: 10px;
  width: ${(props) => (props.medianScreen ? "100vw" : "80vw")};
  height: ${(props) => (props.medianScreen ? "85vh" : "75vh")};
  // min-height: 100vh;
  overflow: visible;
  margin: auto;
  // margin-top: 20px;
`;

export const OpportunityGrid = styled(Grid)<GridContainer>`
  position: relative;
  height: 93%;
  text-align: left;
  margin: 0 auto;
  background-color: white;
  border: 1px solid #2f2f2f;
  border-bottom: ${(props) =>
    props.medianScreen ? "1px solid white" : "1px solid #2f2f2f"};
  border-radius: ${(props) => (props.medianScreen ? "auto" : "10px")};
`;

export const OpportunityLeftColumnContent = styled(Flex)`
  height: 100%;
  // padding-left: 10px;
  // padding-right: 10px;
  overflow-y: auto;
`;

export const OpportunityLeftColumnContainer = styled(Grid.Col)`
  height: 100%;
  padding: 0;
`;

export const OpportunityRightColumnContainer = styled(Grid.Col)`
  border-left: 1px solid #a1a1a1;
  overflow-y: auto;
  height: 100%;
`;

export const OpportunityCard = styled.div<PaginationCard>`
  border-bottom: 1px solid;
  padding-left: 25px;
  padding-right: 10px;
  padding-bottom: 15px;
  background-color: ${(props) => (props.selected ? "#e2f0fe" : "auto")};
  border-top-left-radius: 8px;
`;

export const PaginationNavbarContainer = styled(Flex)`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const CityStateContainer = styled.p`
  background-color: rgba(231, 245, 255, 255);
  display: inline-block;
  margin: 0;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 5px;
`;

export const SearchBar = styled(TextInput)<GridContainer>`
  width: ${(props) => (props.medianScreen ? "75%" : "35%")};
  min-width: 400px;
`;

export const SearchFilterContainer = styled(Flex)`
  margin-bottom: 20px;
`;
