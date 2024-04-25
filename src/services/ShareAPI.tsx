import axios from "axios";
const baseurl = 'https://rvh98qbf-44321.brs.devtunnels.ms'

const apiClient = axios.create({
    baseURL: baseurl,
    headers: {
    }
})

export const consultaAcaoPorCodigo = (codigoacao: string)  => {
   return apiClient.get<any>(`${baseurl}/Share/${codigoacao}`);
}
