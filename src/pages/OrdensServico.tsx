import { jsPDF } from 'jspdf';

export function exportPdf(): void {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  doc.text('Ordem de Serviço', 40, 40);
  doc.save('ordem-de-servico.pdf');
}

export default function OrdensServico() {
  return (
    <button onClick={exportPdf}>Exportar PDF</button>
  );
}
