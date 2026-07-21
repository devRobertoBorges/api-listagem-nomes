import axios from "axios";

import type { Nome } from "../types/Nome";


const api = axios.create({
	baseURL: "http://localhost:3333/api"
});


export async function buscarNomes(): Promise<Nome[]> {

	const response = await api.get("/nome");

	return response.data;
}


export async function deletarNome(id: number) {

	await api.delete(`/nome/${id}`);

}


export async function atualizarNome(
	id: number,
	nome: string
) {

	const response = await api.patch(`/nome/${id}`, {
		nome
	});

	return response.data;

}

export async function criarNome(nome: string) {

	const response = await api.post("/nome", {
		nome
	});

	return response.data;

}