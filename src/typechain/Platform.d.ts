/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PlatformInterface extends ethers.utils.Interface {
  functions: {
    "_balancesOfLockedTokens(address)": FunctionFragment;
    "addCashback(address,address,uint256,bool)": FunctionFragment;
    "balancesForCashbackInEth(address)": FunctionFragment;
    "balancesForCashbackInUndas(address)": FunctionFragment;
    "claimDividends()": FunctionFragment;
    "getContractBalance()": FunctionFragment;
    "isClaimAvailableForUser(address)": FunctionFragment;
    "isClaimingPeriod()": FunctionFragment;
    "isEndedTimeCycle()": FunctionFragment;
    "lockTokens(uint256)": FunctionFragment;
    "lockedEtherCashBack()": FunctionFragment;
    "lockedTokenCashback()": FunctionFragment;
    "receiveCashbackInEth()": FunctionFragment;
    "receiveCashbackInUndas()": FunctionFragment;
    "setMarketplaceAddress(address)": FunctionFragment;
    "timeLeftUntilAllowingToClaim()": FunctionFragment;
    "timeLeftUntilTimeCycleEnds()": FunctionFragment;
    "unlockTokens(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_balancesOfLockedTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addCashback",
    values: [string, string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "balancesForCashbackInEth",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "balancesForCashbackInUndas",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimDividends",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContractBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimAvailableForUser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimingPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isEndedTimeCycle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockedEtherCashBack",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockedTokenCashback",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiveCashbackInEth",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiveCashbackInUndas",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMarketplaceAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "timeLeftUntilAllowingToClaim",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timeLeftUntilTimeCycleEnds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unlockTokens",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "_balancesOfLockedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCashback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balancesForCashbackInEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balancesForCashbackInUndas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimDividends",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isClaimAvailableForUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isClaimingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isEndedTimeCycle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockedEtherCashBack",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockedTokenCashback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveCashbackInEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveCashbackInUndas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketplaceAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeLeftUntilAllowingToClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeLeftUntilTimeCycleEnds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockTokens",
    data: BytesLike
  ): Result;

  events: {
    "DividendsPaid(address,uint256)": EventFragment;
    "FailedToClaimDividends(address,bool)": EventFragment;
    "Lock(address,uint256)": EventFragment;
    "LockFailed(address,bool)": EventFragment;
    "Unlock(address,uint256)": EventFragment;
    "UnlockFailed(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DividendsPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FailedToClaimDividends"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Lock"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LockFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unlock"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnlockFailed"): EventFragment;
}

export type DividendsPaidEvent = TypedEvent<
  [string, BigNumber] & { claimer: string; amount: BigNumber }
>;

export type FailedToClaimDividendsEvent = TypedEvent<
  [string, boolean] & { claimer: string; isAllowedToClaim: boolean }
>;

export type LockEvent = TypedEvent<
  [string, BigNumber] & { sender: string; amount: BigNumber }
>;

export type LockFailedEvent = TypedEvent<
  [string, boolean] & { sender: string; isAllowedToLock: boolean }
>;

export type UnlockEvent = TypedEvent<
  [string, BigNumber] & { sender: string; amount: BigNumber }
>;

export type UnlockFailedEvent = TypedEvent<
  [string, boolean] & { sender: string; isAllowedToUnlock: boolean }
>;

export class Platform extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PlatformInterface;

  functions: {
    _balancesOfLockedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        amount: BigNumber;
        readyTimeToWithdraw: BigNumber;
      }
    >;

    addCashback(
      cashbackee1: string,
      cashbackee2: string,
      amount: BigNumberish,
      isTokenFee: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balancesForCashbackInEth(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balancesForCashbackInUndas(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimDividends(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getContractBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    isClaimAvailableForUser(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timeleft: BigNumber }>;

    isClaimingPeriod(overrides?: CallOverrides): Promise<[boolean]>;

    isEndedTimeCycle(overrides?: CallOverrides): Promise<[boolean]>;

    lockTokens(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lockedEtherCashBack(overrides?: CallOverrides): Promise<[BigNumber]>;

    lockedTokenCashback(overrides?: CallOverrides): Promise<[BigNumber]>;

    receiveCashbackInEth(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    receiveCashbackInUndas(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMarketplaceAddress(
      _marketplace: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    timeLeftUntilAllowingToClaim(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    timeLeftUntilTimeCycleEnds(overrides?: CallOverrides): Promise<[BigNumber]>;

    unlockTokens(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _balancesOfLockedTokens(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      amount: BigNumber;
      readyTimeToWithdraw: BigNumber;
    }
  >;

  addCashback(
    cashbackee1: string,
    cashbackee2: string,
    amount: BigNumberish,
    isTokenFee: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balancesForCashbackInEth(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balancesForCashbackInUndas(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimDividends(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getContractBalance(overrides?: CallOverrides): Promise<BigNumber>;

  isClaimAvailableForUser(
    _staker: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isClaimingPeriod(overrides?: CallOverrides): Promise<boolean>;

  isEndedTimeCycle(overrides?: CallOverrides): Promise<boolean>;

  lockTokens(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lockedEtherCashBack(overrides?: CallOverrides): Promise<BigNumber>;

  lockedTokenCashback(overrides?: CallOverrides): Promise<BigNumber>;

  receiveCashbackInEth(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  receiveCashbackInUndas(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMarketplaceAddress(
    _marketplace: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  timeLeftUntilAllowingToClaim(overrides?: CallOverrides): Promise<BigNumber>;

  timeLeftUntilTimeCycleEnds(overrides?: CallOverrides): Promise<BigNumber>;

  unlockTokens(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _balancesOfLockedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        amount: BigNumber;
        readyTimeToWithdraw: BigNumber;
      }
    >;

    addCashback(
      cashbackee1: string,
      cashbackee2: string,
      amount: BigNumberish,
      isTokenFee: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    balancesForCashbackInEth(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balancesForCashbackInUndas(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimDividends(overrides?: CallOverrides): Promise<void>;

    getContractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    isClaimAvailableForUser(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isClaimingPeriod(overrides?: CallOverrides): Promise<boolean>;

    isEndedTimeCycle(overrides?: CallOverrides): Promise<boolean>;

    lockTokens(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    lockedEtherCashBack(overrides?: CallOverrides): Promise<BigNumber>;

    lockedTokenCashback(overrides?: CallOverrides): Promise<BigNumber>;

    receiveCashbackInEth(overrides?: CallOverrides): Promise<void>;

    receiveCashbackInUndas(overrides?: CallOverrides): Promise<void>;

    setMarketplaceAddress(
      _marketplace: string,
      overrides?: CallOverrides
    ): Promise<void>;

    timeLeftUntilAllowingToClaim(overrides?: CallOverrides): Promise<BigNumber>;

    timeLeftUntilTimeCycleEnds(overrides?: CallOverrides): Promise<BigNumber>;

    unlockTokens(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DividendsPaid(address,uint256)"(
      claimer?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { claimer: string; amount: BigNumber }
    >;

    DividendsPaid(
      claimer?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { claimer: string; amount: BigNumber }
    >;

    "FailedToClaimDividends(address,bool)"(
      claimer?: null,
      isAllowedToClaim?: null
    ): TypedEventFilter<
      [string, boolean],
      { claimer: string; isAllowedToClaim: boolean }
    >;

    FailedToClaimDividends(
      claimer?: null,
      isAllowedToClaim?: null
    ): TypedEventFilter<
      [string, boolean],
      { claimer: string; isAllowedToClaim: boolean }
    >;

    "Lock(address,uint256)"(
      sender?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { sender: string; amount: BigNumber }
    >;

    Lock(
      sender?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { sender: string; amount: BigNumber }
    >;

    "LockFailed(address,bool)"(
      sender?: null,
      isAllowedToLock?: null
    ): TypedEventFilter<
      [string, boolean],
      { sender: string; isAllowedToLock: boolean }
    >;

    LockFailed(
      sender?: null,
      isAllowedToLock?: null
    ): TypedEventFilter<
      [string, boolean],
      { sender: string; isAllowedToLock: boolean }
    >;

    "Unlock(address,uint256)"(
      sender?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { sender: string; amount: BigNumber }
    >;

    Unlock(
      sender?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { sender: string; amount: BigNumber }
    >;

    "UnlockFailed(address,bool)"(
      sender?: null,
      isAllowedToUnlock?: null
    ): TypedEventFilter<
      [string, boolean],
      { sender: string; isAllowedToUnlock: boolean }
    >;

    UnlockFailed(
      sender?: null,
      isAllowedToUnlock?: null
    ): TypedEventFilter<
      [string, boolean],
      { sender: string; isAllowedToUnlock: boolean }
    >;
  };

  estimateGas: {
    _balancesOfLockedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addCashback(
      cashbackee1: string,
      cashbackee2: string,
      amount: BigNumberish,
      isTokenFee: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balancesForCashbackInEth(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balancesForCashbackInUndas(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimDividends(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getContractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    isClaimAvailableForUser(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isClaimingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    isEndedTimeCycle(overrides?: CallOverrides): Promise<BigNumber>;

    lockTokens(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lockedEtherCashBack(overrides?: CallOverrides): Promise<BigNumber>;

    lockedTokenCashback(overrides?: CallOverrides): Promise<BigNumber>;

    receiveCashbackInEth(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    receiveCashbackInUndas(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMarketplaceAddress(
      _marketplace: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    timeLeftUntilAllowingToClaim(overrides?: CallOverrides): Promise<BigNumber>;

    timeLeftUntilTimeCycleEnds(overrides?: CallOverrides): Promise<BigNumber>;

    unlockTokens(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _balancesOfLockedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addCashback(
      cashbackee1: string,
      cashbackee2: string,
      amount: BigNumberish,
      isTokenFee: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balancesForCashbackInEth(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balancesForCashbackInUndas(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimDividends(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getContractBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isClaimAvailableForUser(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isClaimingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isEndedTimeCycle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockTokens(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lockedEtherCashBack(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockedTokenCashback(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveCashbackInEth(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    receiveCashbackInUndas(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMarketplaceAddress(
      _marketplace: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    timeLeftUntilAllowingToClaim(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timeLeftUntilTimeCycleEnds(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unlockTokens(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
