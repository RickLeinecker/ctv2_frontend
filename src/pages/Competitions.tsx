import React, { useState, useEffect } from "react";
import { Grid, MediaQuery, Pagination, Flex } from "@mantine/core";
import { PaginationOpportunity } from "../components/pagination/paginationOpportunity";

export function Competitions() {
  return (
    <div>
      <PaginationOpportunity />
    </div>
  );
}
