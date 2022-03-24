package banco;

public class Main {

	public static void main(String[] args) {
		
		Cliente mailson = new Cliente();
		mailson.setNome("Mailson");
		
		Conta cc = new ContaCorrente(mailson);
		Conta poupanca = new ContaPoupanca(mailson);
		
		cc.depositar(100);
		cc.transferir(100, poupanca);
		
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();

	}

}
