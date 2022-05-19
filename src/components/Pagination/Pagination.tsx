import React from 'react';

import { PaginationList, PageItem, PageLink } from './Pagination.styles';

type PaginationType = {
  itemPerPage: number;
  totalItems: number;
};

const Pagination: React.FC<PaginationType> = ({ itemPerPage, totalItems }) => {
  const itemNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    itemNumbers.push(i);
  }

  return (
    <PaginationList>
      {itemNumbers.map((number) => (
        <PageItem key={number}>
          <PageLink className="active" href="!#">
            {number}
          </PageLink>
        </PageItem>
      ))}
    </PaginationList>
  );
};

export default Pagination;
