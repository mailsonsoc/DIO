package banco;

public class ContaPoupanca extends Conta{

	public ContaPoupanca(Cliente cliente) {
		super(cliente);
	}

	@Override
	public void imprimirExtrato() {
		System.out.println("*** Imprimir Extrato Conta Poupan�a ***");
		imprimirAtributosConta();
		
	}


	
	
}
