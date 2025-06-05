import React from 'react';

function getPaginationRange(currentPage, totalPages) {
    const delta = 2;
    const range = [];

    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 ||
            i === totalPages ||
            (i >= currentPage - delta && i <= currentPage + delta)
        ) {
            range.push(i);
        } else if (range[range.length - 1] !== '...') {
            range.push('...');
        }
    }

    return range;
}

const Pagination = ({
    totalCount,
    pageSize,
    currentPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalCount / pageSize);
    const range = getPaginationRange(currentPage, totalPages);

    return (
        <div style={{ display: 'flex', gap: 8 }}>
            {range.map((item, idx) => {
                if (item === '...') {
                    return <span key={idx}>...</span>;
                }

                return (
                    <button
                        key={idx}
                        style={{
                            fontWeight: item === currentPage ? 'bold' : undefined,
                            backgroundColor: item === currentPage ? '#ddd' : 'transparent',
                            border: '1px solid #ccc',
                            padding: '4px 8px',
                            cursor: 'pointer',
                        }}
                        onClick={() => onPageChange(Number(item))}
                    >
                        {item}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;
