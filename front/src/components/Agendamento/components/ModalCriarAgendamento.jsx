import {
    Overlay,
    Modal,
    Form,
    Input,
    Select,
    SaveButton,
    CancelButton
} from '../styles';

const ModalCriarAgendamento = ({
    form,
    handleChange,
    fechar,
    criarAgendamento
}) => {

    return (
        <Overlay onClick={fechar}>

            <Modal onClick={(e) => e.stopPropagation()}>

                <h2 style={{ marginBottom: '15px', color: 'black' }}>
                    🧹 Novo Agendamento
                </h2>

                <Form onSubmit={criarAgendamento}>

                    <Input
                        name="nome_cliente"
                        type="text"
                        placeholder="Nome do Cliente"
                        onChange={handleChange}
                        required
                        value={form.nome_cliente}
                    />

                    <Input
                        name="data"
                        type="date"
                        onChange={handleChange}
                        required
                        value={form.data}
                    />

                    <Input
                        name="hora"
                        type="time"
                        onChange={handleChange}
                        required
                        value={form.hora}
                    />

                    <Input
                        name="endereco_cliente"
                        type="text"
                        placeholder="Endereço"
                        onChange={handleChange}
                        required
                        value={form.endereco_cliente}
                    />

                    <Select
                        name="servico"
                        onChange={handleChange}
                        required
                        value={form.servico}
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
                        Confirmar agendamento
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

export default ModalCriarAgendamento;