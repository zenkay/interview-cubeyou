export class Block {
	free: boolean = true;
	value: string = "";
	symbol: string = "";

	setValue(value) {
		this.value = value
		this.symbol = (this.value == "circle")
			? "radio_button_unchecked" // O
			: "close" // X
	}
}
