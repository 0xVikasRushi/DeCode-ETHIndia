import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigInt: any;
};
export declare type Epoch = {
    __typename?: 'Epoch';
    id: Scalars['ID'];
    index: Scalars['Int'];
    /** Get input from this particular epoch given the input's index */
    input: Input;
    inputs: InputConnection;
    /** Get notices from this particular input with additional ability to filter and paginate them */
    notices: NoticeConnection;
    /** Get reports from this particular epoch with additional ability to filter and paginate them */
    reports: ReportConnection;
    /** Get vouchers from this particular epoch with additional ability to filter and paginate them */
    vouchers: VoucherConnection;
};
export declare type EpochInputArgs = {
    index: Scalars['Int'];
};
export declare type EpochInputsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<InputFilter>;
};
export declare type EpochNoticesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<NoticeFilter>;
};
export declare type EpochReportsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<ReportFilter>;
};
export declare type EpochVouchersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<VoucherFilter>;
};
export declare type EpochConnection = {
    __typename?: 'EpochConnection';
    edges: Array<EpochEdge>;
    nodes: Array<Epoch>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type EpochEdge = {
    __typename?: 'EpochEdge';
    cursor: Scalars['String'];
    node: Epoch;
};
export declare type Input = {
    __typename?: 'Input';
    blockNumber: Scalars['BigInt'];
    epoch: Epoch;
    id: Scalars['ID'];
    index: Scalars['Int'];
    msgSender: Scalars['String'];
    /** Get notice from this particular input given the notice's index */
    notice: Notice;
    /** Get notices from this particular input with additional ability to filter and paginate them */
    notices: NoticeConnection;
    /** Get report from this particular input given report's index */
    report: Report;
    /** Get reports from this particular input with additional ability to filter and paginate them */
    reports: ReportConnection;
    timestamp: Scalars['BigInt'];
    /** Get voucher from this particular input given the voucher's index */
    voucher: Voucher;
    /** Get vouchers from this particular input with additional ability to filter and paginate them */
    vouchers: VoucherConnection;
};
export declare type InputNoticeArgs = {
    index: Scalars['Int'];
};
export declare type InputNoticesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<NoticeFilter>;
};
export declare type InputReportArgs = {
    index: Scalars['Int'];
};
export declare type InputReportsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<ReportFilter>;
};
export declare type InputVoucherArgs = {
    index: Scalars['Int'];
};
export declare type InputVouchersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<VoucherFilter>;
};
export declare type InputConnection = {
    __typename?: 'InputConnection';
    edges: Array<InputEdge>;
    nodes: Array<Input>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type InputEdge = {
    __typename?: 'InputEdge';
    cursor: Scalars['String'];
    node: Input;
};
export declare type InputFilter = {
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumberGreaterThan?: InputMaybe<Scalars['BigInt']>;
    blockNumberLowerThan?: InputMaybe<Scalars['BigInt']>;
    msgSender?: InputMaybe<Scalars['String']>;
    timestampGreaterThan?: InputMaybe<Scalars['BigInt']>;
    timestampLowerThan?: InputMaybe<Scalars['BigInt']>;
};
export declare type Notice = {
    __typename?: 'Notice';
    id: Scalars['ID'];
    index: Scalars['Int'];
    input: Input;
    /** Keccak in Ethereum hex binary format, starting with '0x' */
    keccak: Scalars['String'];
    /** Payload in Ethereum hex binary format, starting with '0x' */
    payload: Scalars['String'];
    proof?: Maybe<Proof>;
};
export declare type NoticeConnection = {
    __typename?: 'NoticeConnection';
    edges: Array<NoticeEdge>;
    nodes: Array<Notice>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type NoticeEdge = {
    __typename?: 'NoticeEdge';
    cursor: Scalars['String'];
    node: Notice;
};
export declare type NoticeFilter = {
    dummy: Scalars['String'];
};
/** Connection pattern cursor based pagination page info */
export declare type PageInfo = {
    __typename?: 'PageInfo';
    endCursor: Scalars['String'];
    hasNextPage: Scalars['Boolean'];
    hasPreviousPage: Scalars['Boolean'];
    startCursor: Scalars['String'];
};
export declare type Proof = {
    __typename?: 'Proof';
    keccakInHashesSiblings: Array<Scalars['String']>;
    machineStateHash: Scalars['String'];
    noticesEpochRootHash: Scalars['String'];
    outputHashesInEpochSiblings: Array<Scalars['String']>;
    /** Hashes given in Ethereum hex binary format (32 bytes), starting with '0x' */
    outputHashesRootHash: Scalars['String'];
    vouchersEpochRootHash: Scalars['String'];
};
export declare type Query = {
    __typename?: 'Query';
    epoch: Epoch;
    epochI: Epoch;
    epochs: EpochConnection;
    input: Input;
    /** Get all available inputs with additional ability to filter and paginate them */
    inputs: InputConnection;
    notice: Notice;
    /** Get all available notices with additional ability to filter and paginate them */
    notices: NoticeConnection;
    report: Report;
    /** Get all available reports with additional ability to filter and paginate them */
    reports: ReportConnection;
    voucher: Voucher;
    /** Get all available vouchers with additional ability to filter and paginate them */
    vouchers: VoucherConnection;
};
export declare type QueryEpochArgs = {
    id: Scalars['ID'];
};
export declare type QueryEpochIArgs = {
    index: Scalars['Int'];
};
export declare type QueryEpochsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};
export declare type QueryInputArgs = {
    id: Scalars['ID'];
};
export declare type QueryInputsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<InputFilter>;
};
export declare type QueryNoticeArgs = {
    id: Scalars['ID'];
};
export declare type QueryNoticesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<NoticeFilter>;
};
export declare type QueryReportArgs = {
    id: Scalars['ID'];
};
export declare type QueryReportsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<ReportFilter>;
};
export declare type QueryVoucherArgs = {
    id: Scalars['ID'];
};
export declare type QueryVouchersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<VoucherFilter>;
};
export declare type Report = {
    __typename?: 'Report';
    id: Scalars['ID'];
    index: Scalars['Int'];
    input: Input;
    /** Payload in Ethereum hex binary format, starting with '0x' */
    payload: Scalars['String'];
};
export declare type ReportConnection = {
    __typename?: 'ReportConnection';
    edges: Array<ReportEdge>;
    nodes: Array<Report>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type ReportEdge = {
    __typename?: 'ReportEdge';
    cursor: Scalars['String'];
    node: Report;
};
export declare type ReportFilter = {
    dummy: Scalars['String'];
};
export declare type Voucher = {
    __typename?: 'Voucher';
    /** Destination address as an Ethereum hex binary format (20 bytes), starting with '0x' */
    destination: Scalars['String'];
    id: Scalars['ID'];
    index: Scalars['Int'];
    input: Input;
    /** Payload in Ethereum hex binary format, starting with '0x' */
    payload: Scalars['String'];
    proof?: Maybe<Proof>;
};
export declare type VoucherConnection = {
    __typename?: 'VoucherConnection';
    edges: Array<VoucherEdge>;
    nodes: Array<Voucher>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type VoucherEdge = {
    __typename?: 'VoucherEdge';
    cursor: Scalars['String'];
    node: Voucher;
};
export declare type VoucherFilter = {
    destination: Scalars['String'];
};
export declare type NoticeQueryVariables = Exact<{
    id: Scalars['ID'];
}>;
export declare type NoticeQuery = {
    __typename?: 'Query';
    notice: {
        __typename?: 'Notice';
        id: string;
        payload: string;
        index: number;
        keccak: string;
        proof?: {
            __typename?: 'Proof';
            outputHashesRootHash: string;
            vouchersEpochRootHash: string;
            noticesEpochRootHash: string;
            machineStateHash: string;
            keccakInHashesSiblings: Array<string>;
            outputHashesInEpochSiblings: Array<string>;
        } | null;
        input: {
            __typename?: 'Input';
            index: number;
            epoch: {
                __typename?: 'Epoch';
                index: number;
            };
        };
    };
};
export declare type NoticesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type NoticesQuery = {
    __typename?: 'Query';
    notices: {
        __typename?: 'NoticeConnection';
        nodes: Array<{
            __typename?: 'Notice';
            id: string;
            index: number;
            payload: string;
            input: {
                __typename?: 'Input';
                index: number;
                epoch: {
                    __typename?: 'Epoch';
                    index: number;
                };
            };
        }>;
    };
};
export declare type NoticesByEpochAndInputQueryVariables = Exact<{
    epoch_index: Scalars['Int'];
    input_index: Scalars['Int'];
}>;
export declare type NoticesByEpochAndInputQuery = {
    __typename?: 'Query';
    epoch: {
        __typename?: 'Epoch';
        input: {
            __typename?: 'Input';
            notices: {
                __typename?: 'NoticeConnection';
                nodes: Array<{
                    __typename?: 'Notice';
                    id: string;
                    index: number;
                    payload: string;
                    input: {
                        __typename?: 'Input';
                        index: number;
                        epoch: {
                            __typename?: 'Epoch';
                            index: number;
                        };
                    };
                }>;
            };
        };
    };
};
export declare type NoticesByEpochQueryVariables = Exact<{
    epoch_index: Scalars['Int'];
}>;
export declare type NoticesByEpochQuery = {
    __typename?: 'Query';
    epoch: {
        __typename?: 'Epoch';
        inputs: {
            __typename?: 'InputConnection';
            nodes: Array<{
                __typename?: 'Input';
                notices: {
                    __typename?: 'NoticeConnection';
                    nodes: Array<{
                        __typename?: 'Notice';
                        id: string;
                        index: number;
                        payload: string;
                        input: {
                            __typename?: 'Input';
                            index: number;
                            epoch: {
                                __typename?: 'Epoch';
                                index: number;
                            };
                        };
                    }>;
                };
            }>;
        };
    };
};
export declare type VoucherQueryVariables = Exact<{
    id: Scalars['ID'];
}>;
export declare type VoucherQuery = {
    __typename?: 'Query';
    voucher: {
        __typename?: 'Voucher';
        id: string;
        destination: string;
        payload: string;
        index: number;
        proof?: {
            __typename?: 'Proof';
            outputHashesRootHash: string;
            vouchersEpochRootHash: string;
            noticesEpochRootHash: string;
            machineStateHash: string;
            keccakInHashesSiblings: Array<string>;
            outputHashesInEpochSiblings: Array<string>;
        } | null;
        input: {
            __typename?: 'Input';
            index: number;
            epoch: {
                __typename?: 'Epoch';
                index: number;
            };
        };
    };
};
export declare type VouchersQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type VouchersQuery = {
    __typename?: 'Query';
    vouchers: {
        __typename?: 'VoucherConnection';
        nodes: Array<{
            __typename?: 'Voucher';
            id: string;
            index: number;
            destination: string;
            payload: string;
            input: {
                __typename?: 'Input';
                index: number;
                epoch: {
                    __typename?: 'Epoch';
                    index: number;
                };
            };
        }>;
    };
};
export declare type VouchersByEpochAndInputQueryVariables = Exact<{
    epoch_index: Scalars['Int'];
    input_index: Scalars['Int'];
}>;
export declare type VouchersByEpochAndInputQuery = {
    __typename?: 'Query';
    epoch: {
        __typename?: 'Epoch';
        input: {
            __typename?: 'Input';
            vouchers: {
                __typename?: 'VoucherConnection';
                nodes: Array<{
                    __typename?: 'Voucher';
                    id: string;
                    index: number;
                    destination: string;
                    payload: string;
                    input: {
                        __typename?: 'Input';
                        index: number;
                        epoch: {
                            __typename?: 'Epoch';
                            index: number;
                        };
                    };
                }>;
            };
        };
    };
};
export declare type VouchersByEpochQueryVariables = Exact<{
    epoch_index: Scalars['Int'];
}>;
export declare type VouchersByEpochQuery = {
    __typename?: 'Query';
    epoch: {
        __typename?: 'Epoch';
        inputs: {
            __typename?: 'InputConnection';
            nodes: Array<{
                __typename?: 'Input';
                vouchers: {
                    __typename?: 'VoucherConnection';
                    nodes: Array<{
                        __typename?: 'Voucher';
                        id: string;
                        index: number;
                        destination: string;
                        payload: string;
                        input: {
                            __typename?: 'Input';
                            index: number;
                            epoch: {
                                __typename?: 'Epoch';
                                index: number;
                            };
                        };
                    }>;
                };
            }>;
        };
    };
};
export declare type ReportQueryVariables = Exact<{
    id: Scalars['ID'];
}>;
export declare type ReportQuery = {
    __typename?: 'Query';
    report: {
        __typename?: 'Report';
        id: string;
        payload: string;
        index: number;
        input: {
            __typename?: 'Input';
            index: number;
            epoch: {
                __typename?: 'Epoch';
                index: number;
            };
        };
    };
};
export declare type ReportsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type ReportsQuery = {
    __typename?: 'Query';
    reports: {
        __typename?: 'ReportConnection';
        nodes: Array<{
            __typename?: 'Report';
            id: string;
            index: number;
            payload: string;
            input: {
                __typename?: 'Input';
                index: number;
                epoch: {
                    __typename?: 'Epoch';
                    index: number;
                };
            };
        }>;
    };
};
export declare type ReportsByEpochAndInputQueryVariables = Exact<{
    epoch_index: Scalars['Int'];
    input_index: Scalars['Int'];
}>;
export declare type ReportsByEpochAndInputQuery = {
    __typename?: 'Query';
    epoch: {
        __typename?: 'Epoch';
        input: {
            __typename?: 'Input';
            reports: {
                __typename?: 'ReportConnection';
                nodes: Array<{
                    __typename?: 'Report';
                    id: string;
                    index: number;
                    payload: string;
                    input: {
                        __typename?: 'Input';
                        index: number;
                        epoch: {
                            __typename?: 'Epoch';
                            index: number;
                        };
                    };
                }>;
            };
        };
    };
};
export declare type ReportsByEpochQueryVariables = Exact<{
    epoch_index: Scalars['Int'];
}>;
export declare type ReportsByEpochQuery = {
    __typename?: 'Query';
    epoch: {
        __typename?: 'Epoch';
        inputs: {
            __typename?: 'InputConnection';
            nodes: Array<{
                __typename?: 'Input';
                reports: {
                    __typename?: 'ReportConnection';
                    nodes: Array<{
                        __typename?: 'Report';
                        id: string;
                        index: number;
                        payload: string;
                        input: {
                            __typename?: 'Input';
                            index: number;
                            epoch: {
                                __typename?: 'Epoch';
                                index: number;
                            };
                        };
                    }>;
                };
            }>;
        };
    };
};
export declare const NoticeDocument: DocumentNode<NoticeQuery, Exact<{
    id: Scalars['ID'];
}>>;
export declare const NoticesDocument: DocumentNode<NoticesQuery, Exact<{
    [key: string]: never;
}>>;
export declare const NoticesByEpochAndInputDocument: DocumentNode<NoticesByEpochAndInputQuery, Exact<{
    epoch_index: Scalars['Int'];
    input_index: Scalars['Int'];
}>>;
export declare const NoticesByEpochDocument: DocumentNode<NoticesByEpochQuery, Exact<{
    epoch_index: Scalars['Int'];
}>>;
export declare const VoucherDocument: DocumentNode<VoucherQuery, Exact<{
    id: Scalars['ID'];
}>>;
export declare const VouchersDocument: DocumentNode<VouchersQuery, Exact<{
    [key: string]: never;
}>>;
export declare const VouchersByEpochAndInputDocument: DocumentNode<VouchersByEpochAndInputQuery, Exact<{
    epoch_index: Scalars['Int'];
    input_index: Scalars['Int'];
}>>;
export declare const VouchersByEpochDocument: DocumentNode<VouchersByEpochQuery, Exact<{
    epoch_index: Scalars['Int'];
}>>;
export declare const ReportDocument: DocumentNode<ReportQuery, Exact<{
    id: Scalars['ID'];
}>>;
export declare const ReportsDocument: DocumentNode<ReportsQuery, Exact<{
    [key: string]: never;
}>>;
export declare const ReportsByEpochAndInputDocument: DocumentNode<ReportsByEpochAndInputQuery, Exact<{
    epoch_index: Scalars['Int'];
    input_index: Scalars['Int'];
}>>;
export declare const ReportsByEpochDocument: DocumentNode<ReportsByEpochQuery, Exact<{
    epoch_index: Scalars['Int'];
}>>;
