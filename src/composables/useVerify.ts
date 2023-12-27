interface ObjectType {
  [ key: string ]: any
}

interface RuleType {
  rule: Function
  warn: string
}

export interface RuleFormType {
  [ key: string ]: RuleType[]
}

export const useVerify = ( data: ObjectType , ruleForm: RuleFormType ): any => {

  const returnWarn: ObjectType = {}

  for( const [ name , ruleList ] of Object.entries( ruleForm ) ) {
    for( const { rule , warn } of ruleList ) {
      if( !rule( data[ name ] ) ) {
        returnWarn[ name ] = warn
        break
      }
    }
  }

  if( Object.keys( returnWarn ).length > 0 ) {
    return {
      data: null,
      warn: returnWarn,
    }
  }

  const returnData = Object.keys( ruleForm ).reduce( ( result: ObjectType , name: string ) => {
    result[ name ] = data[ name ]
    return result
  } , {} )

  return {
    data: returnData,
    warn: null,
  }
}