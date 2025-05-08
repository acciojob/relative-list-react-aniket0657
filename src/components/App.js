import React from 'react';

const RelativeList = () => {
const relatives = [
'Uncle Rajesh',
'Aunt Sunita',
'Cousin Karan',
'Grandparents',
'Uncle Vinod'
];

return (
<ol key="relativeList">
{relatives.map((name, index) => (
<li key={relativeListItem${index + 1}}>{name}</li>
))}
</ol>
);
};

export default RelativeList;
