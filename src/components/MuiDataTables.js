import React from 'react';
import MUIDataTable from "mui-datatables";

export default function MuiDataTable(prosp) {
    return (
        <MUIDataTable
            title={prosp.title}
            data={prosp.data}
            columns={prosp.columns}
            options={{
                textLabels: {
                    body: {
                        noMatch: "Desculpe, nenhum registro foi encontrado",
                        toolTip: "Ordem",
                    },
                    pagination: {
                        next: "Próxima Págima",
                        previous: "Voltar Página",
                        rowsPerPage: "Linhas por página:",
                        displayRows: "de",
                    },
                    toolbar: {
                        search: "Pesquisar",
                        downloadCsv: "Download CSV",
                        print: "Imprimir",
                        viewColumns: "Visualizar Colunas",
                        filterTable: "Filtro de Tabela",
                    },
                    filter: {
                        all: "Tudo",
                        title: "Filtros",
                        reset: "Limpar",
                    },
                    viewColumns: {
                        title: "Mostrar Colunas",
                        titleAria: "Mostrar/Ocultar",
                    },
                    selectedRows: {
                        text: "linha(s) selecionadas",
                        delete: "Deletar",
                        deleteAria: "Deletar linhas selecionadas",
                    },
                },
                filterType: 'dropdown',
                downloadOptions: { separator: ";" },
            }}
        />
    )
}