class ResponseClass {
    public error: boolean;
    public msg: String;
    public dados: any;

    constructor() {
        this.error = false;
        this.msg = null;
        this.dados = null;
    }
}

export default ResponseClass;