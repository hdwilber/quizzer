export class Enode{
  children: any;
  expanded = true;
  checked = false;
  type: string;
  data: any;
  id: number;
  code: string;
  label: any;
  logics: Enode;
};

export class TypeDef {
  code: string;
  name: string;
  description: string;
};

export class AddingType{
  code: string;
  name: string;
  description: string;
}

export class Label {
  id: number;
  type: string;
  data: string;
}
