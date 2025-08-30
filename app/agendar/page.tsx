"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AgendarPage() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const criarAgendamento = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMensagem("");

    const { error } = await supabase.from("appointments").insert([
      {
        nome,
        telefone,
        servico,
        data,
        hora,
        status: "pendente",
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      setMensagem("❌ Erro ao agendar. Tente novamente.");
    } else {
      setMensagem("✅ Agendamento realizado com sucesso!");
      setNome("");
      setTelefone("");
      setServico("");
      setData("");
      setHora("");
    }
  };

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-zinc-900 p-6 rounded-xl w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Agende seu Corte</h1>

        <form onSubmit={criarAgendamento} className="space-y-4">
          <input
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="w-full p-2 rounded bg-zinc-800 text-white"
          />

          <input
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
            className="w-full p-2 rounded bg-zinc-800 text-white"
          />

          <select
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            required
            className="w-full p-2 rounded bg-zinc-800 text-white"
          >
            <option value="">Selecione o serviço</option>
            <option value="Corte">Corte - R$ 50,00</option>
            <option value="Barba">Barba - R$ 35,00</option>
            <option value="Corte + Barba">Corte + Barba - R$ 70,00</option>
          </select>

          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
            className="w-full p-2 rounded bg-zinc-800 text-white"
          />

          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
            className="w-full p-2 rounded bg-zinc-800 text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 py-2 rounded font-bold hover:bg-orange-600 transition"
          >
            {loading ? "Agendando..." : "Confirmar Agendamento"}
          </button>
        </form>

        {mensagem && (
          <p className="mt-4 text-center text-sm">{mensagem}</p>
        )}
      </div>
    </main>
  );
}
