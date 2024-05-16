import React, { useState } from 'react';
import Button from "../../components/button";
import InputSearch from "../../components/inputSearch";
import { Table } from "../../components/table";
import { IListGroups } from '../../interfaces';

const dataList: IListGroups[] = [
  {
    groupId: 1,
    signatureTypeId: 2,
    groupTypeId: 3,
    name: 'Nome do Grupo 1',
    title: 'Título do Grupo 1',
    description: 'Descrição do Grupo 1'
  },
  {
    groupId: 2,
    signatureTypeId: 3,
    groupTypeId: 1,
    name: 'Nome do Grupo 2',
    title: 'Título do Grupo 2',
    description: 'Descrição do Grupo 2'
  },
  {
    groupId: 3,
    signatureTypeId: 1,
    groupTypeId: 2,
    name: 'Nome do Grupo 3',
    title: 'Título do Grupo 3',
    description: 'Descrição do Grupo 3'
  }
];

const keysArray: string[] = Object.keys(dataList[0])

const Groups = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isFilter, setIsFilter] = useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setIsFilter(true);
  };

  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  const onClickClear = () => {
    setIsFilter(false);
    setSearchValue('');
  };

  const filteredData = dataList && dataList
    ? dataList.filter(item => {
        return Object.values(item).some(value =>
          typeof value === 'string' && removeAccents(value).toLowerCase().includes(removeAccents(searchValue).toLowerCase())
        );
      })
    : [];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Grupos</h1>
        <Button
          onClick={() => {}}
          iconName="PlusIcon"
        >
          Create
        </Button>
      </div>
      <div className="overflow-x-auto bg-slate-50 border">
        <div>
          <div className="flex justify-between items-center m-4">
              <Button
                onClick={onClickClear}
                iconName="FunnelIcon"
                type="secondary"
              >
                Clear
              </Button>
              <div className="flex justify-end items-center">
                <form>
                  <InputSearch
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder="Search with keywords"
                  />
                </form>
              </div>
          </div>
          <Table data={isFilter ? filteredData : dataList} actions={true} keysArray={keysArray} />
        </div>
      </div>
    </div>
  );
}

export default Groups;
