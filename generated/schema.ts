// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DaoAddressSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DaoAddressSet entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DaoAddressSet entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DaoAddressSet", id.toString(), this);
  }

  static load(id: string): DaoAddressSet | null {
    return store.get("DaoAddressSet", id) as DaoAddressSet | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dao(): Bytes {
    let value = this.get("dao");
    return value.toBytes();
  }

  set dao(value: Bytes) {
    this.set("dao", Value.fromBytes(value));
  }
}

export class DaoFeeSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DaoFeeSet entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DaoFeeSet entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DaoFeeSet", id.toString(), this);
  }

  static load(id: string): DaoFeeSet | null {
    return store.get("DaoFeeSet", id) as DaoFeeSet | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get numerator(): BigInt {
    let value = this.get("numerator");
    return value.toBigInt();
  }

  set numerator(value: BigInt) {
    this.set("numerator", Value.fromBigInt(value));
  }

  get denominator(): BigInt {
    let value = this.get("denominator");
    return value.toBigInt();
  }

  set denominator(value: BigInt) {
    this.set("denominator", Value.fromBigInt(value));
  }
}

export class ExitFeeCooldownSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExitFeeCooldownSet entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExitFeeCooldownSet entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExitFeeCooldownSet", id.toString(), this);
  }

  static load(id: string): ExitFeeCooldownSet | null {
    return store.get("ExitFeeCooldownSet", id) as ExitFeeCooldownSet | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get cooldown(): BigInt {
    let value = this.get("cooldown");
    return value.toBigInt();
  }

  set cooldown(value: BigInt) {
    this.set("cooldown", Value.fromBigInt(value));
  }
}

export class ExitFeeSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExitFeeSet entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExitFeeSet entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExitFeeSet", id.toString(), this);
  }

  static load(id: string): ExitFeeSet | null {
    return store.get("ExitFeeSet", id) as ExitFeeSet | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get numerator(): BigInt {
    let value = this.get("numerator");
    return value.toBigInt();
  }

  set numerator(value: BigInt) {
    this.set("numerator", Value.fromBigInt(value));
  }

  get denominator(): BigInt {
    let value = this.get("denominator");
    return value.toBigInt();
  }

  set denominator(value: BigInt) {
    this.set("denominator", Value.fromBigInt(value));
  }
}

export class FundCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save FundCreated entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FundCreated entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FundCreated", id.toString(), this);
  }

  static load(id: string): FundCreated | null {
    return store.get("FundCreated", id) as FundCreated | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fundAddress(): Bytes {
    let value = this.get("fundAddress");
    return value.toBytes();
  }

  set fundAddress(value: Bytes) {
    this.set("fundAddress", Value.fromBytes(value));
  }

  get isPoolPrivate(): boolean {
    let value = this.get("isPoolPrivate");
    return value.toBoolean();
  }

  set isPoolPrivate(value: boolean) {
    this.set("isPoolPrivate", Value.fromBoolean(value));
  }

  get fundName(): string {
    let value = this.get("fundName");
    return value.toString();
  }

  set fundName(value: string) {
    this.set("fundName", Value.fromString(value));
  }

  get managerName(): string {
    let value = this.get("managerName");
    return value.toString();
  }

  set managerName(value: string) {
    this.set("managerName", Value.fromString(value));
  }

  get manager(): Bytes {
    let value = this.get("manager");
    return value.toBytes();
  }

  set manager(value: Bytes) {
    this.set("manager", Value.fromBytes(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }

  get managerFeeNumerator(): BigInt {
    let value = this.get("managerFeeNumerator");
    return value.toBigInt();
  }

  set managerFeeNumerator(value: BigInt) {
    this.set("managerFeeNumerator", Value.fromBigInt(value));
  }

  get managerFeeDenominator(): BigInt {
    let value = this.get("managerFeeDenominator");
    return value.toBigInt();
  }

  set managerFeeDenominator(value: BigInt) {
    this.set("managerFeeDenominator", Value.fromBigInt(value));
  }
}

export class MaximumSupportedAssetCountSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save MaximumSupportedAssetCountSet entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MaximumSupportedAssetCountSet entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MaximumSupportedAssetCountSet", id.toString(), this);
  }

  static load(id: string): MaximumSupportedAssetCountSet | null {
    return store.get(
      "MaximumSupportedAssetCountSet",
      id
    ) as MaximumSupportedAssetCountSet | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }
}

export class OwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save OwnershipTransferred entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OwnershipTransferred entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OwnershipTransferred", id.toString(), this);
  }

  static load(id: string): OwnershipTransferred | null {
    return store.get("OwnershipTransferred", id) as OwnershipTransferred | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    return value.toBytes();
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    return value.toBytes();
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }
}

export class ProxyCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ProxyCreated entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ProxyCreated entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ProxyCreated", id.toString(), this);
  }

  static load(id: string): ProxyCreated | null {
    return store.get("ProxyCreated", id) as ProxyCreated | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proxy(): Bytes {
    let value = this.get("proxy");
    return value.toBytes();
  }

  set proxy(value: Bytes) {
    this.set("proxy", Value.fromBytes(value));
  }
}
