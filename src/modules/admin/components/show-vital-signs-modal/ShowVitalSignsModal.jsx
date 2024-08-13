import stylesheet from './show-vital-signs-modal.module.css'
import Table from '@Modules/core/components/table/Table'
import Button from '@Modules/core/components/button/Button'

const ShowVitalSignsModal = ({ handleClose }) => {
    return (
        <div className={stylesheet.CreateVitalSignsModal}>
            <div className={stylesheet['CreateVitalSignsModal-table']}>
                <Table className='w-full'>
                    <Table.Head>
                        <Table.Row>
                            <Table.Column>
                                Id
                            </Table.Column>
                            <Table.Column>
                                Model
                            </Table.Column>
                            <Table.Column>
                                Ritmo Cardiaco
                            </Table.Column>
                            <Table.Column>
                                Estres
                            </Table.Column>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        <Table.Row>
                            <Table.Column>
                                ---
                            </Table.Column>
                            <Table.Column>
                                ---
                            </Table.Column>
                            <Table.Column>
                                ---
                            </Table.Column>
                            <Table.Column>
                                ---
                            </Table.Column>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <div className={stylesheet['CreateVitalSignsModal-buttons-group']}>
                    <Button onClick={handleClose}>Cerrar</Button>
                </div>
            </div>
        </div>
    )
}

export default ShowVitalSignsModal