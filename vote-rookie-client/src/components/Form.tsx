import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSubscribe } from '../useAuth'

type Inputs = {
    email: string
    confirmEmail: string
    phone: string
    accoutn: number
}

export interface IFormProps {
    children?: React.ReactNode
    onClick?: (e: any) => void
}
export const Form = () => {
    const subscribeUser = useSubscribe()
    /* const subscribe = useCallback(
        (data) => {
            subscribeUser(data)
        },
        [subscribeUser],
    ) */
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<Inputs>({
        mode: 'onChange',
    })
    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        e?.target.reset() // reset after form submit
        subscribeUser(data)
    }
    return (
        <div className="form-register">
            <form
                onSubmit={handleSubmit(onSubmit)}
            
            >
                {/* register your input into the hook by invoking the "register" function */}
                <div >
                    <input
                        className="form__field"
                        placeholder="Full Name"
                        defaultValue=""
                    />
                </div>
                <div >
                    <input
                        className="form__field"
                        placeholder="Email Adress"
                        defaultValue=""
                        {...register('email')}
                    />
                </div>

                {/* include validation with required or other standard HTML validation rules */}
                <div className="form__group field">
                    <input
                        className="form__field"
                        placeholder="repeat Email Adress"
                        {...register('confirmEmail', {
                            required: true,
                            validate: () =>
                                getValues('email') ===
                                getValues('confirmEmail'),
                        })}
                    />

                    {/* errors will return when field validation fails  */}
                    <div style={{ color: 'red' }}>
                        {errors.confirmEmail && (
                            <span>
                                <small>Emails don't Match</small>
                            </span>
                        )}
                    </div>
                </div>
                {/* <div className="form__group field">
                    <input
                        className="form__field"
                        type="tel"
                        placeholder="Confirm Email"
                        {...register('phone', {
                            required: true,
                            maxLength: '12',
                            pattern: /[0-9]{3} [0-9]{3} [0-9]{4}/,
                        })}
                        title="Ten digits code"
                    />
                    <label className="form__label" htmlFor="phone">
                        Phone
                    </label>

                    <div style={{ color: 'red' }}>
                        {errors.phone && (
                            <span>
                                <small>Invalid Number</small>
                            </span>
                        )}
                    </div>
                </div> */}
                <button className="figma-button-1" type="submit">
                    CONTINUE
                </button>
            </form>
        </div>
    )
}

export default Form
