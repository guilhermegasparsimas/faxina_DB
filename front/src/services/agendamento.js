import { api } from "./api";

export const agendamentoApi = async (form) => {
    try {
        const response = await api.post('/agendamento', form);
        return response.data;
    } catch (error) {
        console.error("Erro ao realizar novo agendamento:", error);
        throw error;
    }
}