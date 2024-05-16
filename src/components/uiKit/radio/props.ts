import {Path} from 'react-hook-form'

type RRFprops<FormFields> = {
    name: Path<FormFields>
    icon?: boolean
}

export type DinamicInputRRF<FormFields> = RRFprops<FormFields>
