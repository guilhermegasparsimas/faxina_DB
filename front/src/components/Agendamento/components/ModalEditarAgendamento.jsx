import {
  Overlay,
  Modal,
  Form,
  Input,
  Select,
  SaveButton,
  CancelButton
} from '../styles';

const ModalEditarAgendamento = ({
  form,
  handleChange,
  fechar,
  editarAgendamento
}) => {

  return (
    <Overlay>

      <Modal>

        <h2 style={{ color: '#333' }}>
          Editar Agendamento
        </h2>

        <Form onSubmit={editarAgendamento}>

          <Input
            type="text"
            name="nome_cliente"
            value={form.nome_cliente}
            onChange={handleChange}
            placeholder="Nome do Cliente"
            required
          />

          <Input
            type="date"
            name="data"
            value={form.data}
            onChange={handleChange}
            required
          />

          <Input
            type="time"
            name="hora"
            value={form.hora}
            onChange={handleChange}
            required
          />

          <Input
            type="text"
            name="endereco_cliente"
            value={form.endereco_cliente}
            onChange={handleChange}
            placeholder="Endereço"
            required
          />

          <Select
            name="servico"
            value={form.servico}
            onChange={handleChange}
            required
          >
            <option value="">
              Selecione o serviço
            </option>

            <option value="residencial">
              🏠 Limpeza Residencial
            </option>

            <option value="comercial">
              🏢 Limpeza Comercial
            </option>

            <option value="profunda">
              ✨ Limpeza Profunda
            </option>
          </Select>

          <SaveButton type="submit">
            Salvar Alterações
          </SaveButton>

          <CancelButton
            type="button"
            onClick={fechar}
          >
            Cancelar
          </CancelButton>

        </Form>

      </Modal>

    </Overlay>
  );
};

export default ModalEditarAgendamento;