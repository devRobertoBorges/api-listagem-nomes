import { useState } from "react";

interface NovoNomeProps {
	onSalvar: (nome: string) => void;
	onCancelar: () => void;
}

function NovoNome({
	onSalvar,
	onCancelar,
}: NovoNomeProps) {

	const [nome, setNome] = useState("");

	function salvar() {

		if (!nome.trim()) return;

		onSalvar(nome);

		setNome("");

	}


	function pressionarEnter(
		event: React.KeyboardEvent<HTMLInputElement>
	) {

		if (event.key === "Enter") {

			salvar();

		}

	}


	return (

		<div
			className="
				bg-[#f8f8fa]
				border
				border-[#d2d4dc]
				rounded-xl
				p-5
				mb-6
				shadow-sm
			"
		>

			<h2
				className="
					text-lg
					font-semibold
					text-[#2f3035]
					mb-4
				"
			>

				Novo registro

			</h2>


			<input
				autoFocus
				type="text"
				value={nome}
				onChange={(e) => setNome(e.target.value)}
				onKeyDown={pressionarEnter}
				placeholder="Digite um nome..."
				className="
					w-full
					border
					border-[#c0c2ce]
					rounded-lg
					px-4
					py-2
					outline-none
					focus:border-[#7f8699]
					mb-4
				"
			/>


			<div
				className="
					flex
					justify-end
					gap-3
				"
			>


				<button
					onClick={onCancelar}
					className="
						px-4
						py-2
						bg-[#d2d4dc]
						rounded-lg
						hover:scale-105
						transition-all
					"
				>

					Cancelar

				</button>


				<button
					onClick={salvar}
					className="
						px-4
						py-2
						bg-[#7f8699]
						text-white
						rounded-lg
						hover:scale-105
						transition-all
					"
				>

					Salvar

				</button>


			</div>


		</div>

	);

}

export default NovoNome;