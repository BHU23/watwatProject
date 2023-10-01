
// import React from 'react';
// import type { PaginationProps } from 'antd';
// import { Pagination } from 'antd';

// const onChange: PaginationProps['onChange'] = (pageNumber) => {
//   console.log('Page: ', pageNumber);
// };

// const paginations: React.FC = () => (
//   <>
//     <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
//     <br />
//     <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
//   </>
// );

// export default paginations;

import React from 'react';
import { Pagination } from 'antd';

const paginations: React.FC = () => <Pagination defaultCurrent={1} total={50} />;

export default paginations;