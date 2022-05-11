import { Story } from '@storybook/react'
import { tokens, tokensProps } from './_tokens'
import { CSSProperties } from '@stitches/core'
import * as styles from './_web-tokens.styles'

export type BaseProps = {
  title: string
  tokens: tokensProps
  key: tokens
}

export const Template: Story<BaseProps> = (args: BaseProps) => (
  <>
    <h2 className={styles.Title()}>{args.title}</h2>
    {Object.entries(args.tokens).map(([key, { token, value }]) => {
      return (
        <div className={styles.Card()} key={key}>
          <div className="row">
            <div className="col">
              <span>{`$${token}`}</span>
              <br />
              <span style={{ opacity: 0.5 }}>{`--${args.key}-${token}`}</span>
            </div>
            <div className="col -value">{value}</div>
            {args.key === 'colors' && (
              <div
                className="col -preview -bg"
                style={{
                  backgroundColor: value as unknown as CSSProperties['backgroundColor']
                }}
              ></div>
            )}
          </div>
        </div>
      )
    })}
  </>
)
