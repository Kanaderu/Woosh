import React from 'react';

interface TableBlockProps {
  value: {
    table_caption: string,
    first_row_is_table_header: boolean,
    first_col_is_header: boolean,
    data: Array<Array<string|null>>
  };
};

const TableBlock: React.FC<TableBlockProps> = (props) => {

  const divStyle = {
    margin: 'auto',
    width: 'auto',
  };

  return (
    <>
      <div>
        <table style={ divStyle }>
          <caption> { props.value.table_caption }</caption>
          {
            props.value.first_row_is_table_header &&
            <thead>
              <tr>
                { props.value.data[0].map((data: string|null, row_key: number) => <th key={ row_key }>{ data }</th>) }
              </tr>
            </thead>
          }
          <tbody>
            { props.value.data.map((row: Array<string|null>, row_key: number) =>
                <tr key={ row_key }>
                  {
                    props.value.first_row_is_table_header && row_key != 0 &&
                    row.map((data: string|null, col_key: number) => {
                      if( props.value.first_col_is_header && col_key == 0 ) {
                        return <th key={ col_key }>{ data }</th>
                      } else {
                        return <td key={ col_key }>{ data }</td>
                      }
                    })
                  }
                  {
                    !props.value.first_row_is_table_header &&
                    row.map((data: string|null, col_key: number) => {
                      if( props.value.first_col_is_header && col_key == 0 ) {
                        return <th key={ col_key }>{ data }</th>
                      } else {
                        return <td key={ col_key }>{ data }</td>
                      }
                    })
                  }
                </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </>
  )
};

TableBlock.defaultProps = {
  
};

export default TableBlock;
