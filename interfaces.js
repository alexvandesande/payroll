var contractABI = [
  {
    constant: true,
    inputs: [],
    name: "lastPressed",
    outputs: [{ name: "", type: "uint256", value: "1499870209" }],
    payable: false,
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "press",
    outputs: [],
    payable: false,
    type: "function"
  },
  { inputs: [], payable: false, type: "constructor" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "presser", type: "address" },
      { indexed: false, name: "pressTime", type: "uint256" },
      { indexed: false, name: "score", type: "uint256" }
    ],
    name: "ButtonPress",
    type: "event"
  }
];

var payrollABI = [
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "payroll",
    outputs: [
      { name: "recipient", type: "address" },
      { name: "payRate", type: "uint256" },
      { name: "lastPaid", type: "uint256" },
      { name: "name", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "recipient", type: "address" }],
    name: "getAmountOwed",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "salaryId",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "payAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "recipient", type: "address" },
      { name: "yearlyPay", type: "uint256" },
      { name: "startingDate", type: "uint256" },
      { name: "initials", type: "string" }
    ],
    name: "changePay",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "putInSavings",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "payrollLength",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "amount", type: "uint256" },
      { name: "recipient", type: "address" },
      { name: "justification", type: "string" }
    ],
    name: "cashOut",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "recipient", type: "address" }],
    name: "removePay",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "recipient", type: "address" },
      { name: "justification", type: "string" }
    ],
    name: "paySalary",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "payEveryone",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  { payable: true, stateMutability: "payable", type: "fallback" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "recipient", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
      { indexed: false, name: "justification", type: "string" }
    ],
    name: "MemberPaid",
    type: "event"
  }
];

var compoundABI = [
  {
    constant: true,
    inputs: [
      { name: "account", type: "address" },
      { name: "asset", type: "address" }
    ],
    name: "getBorrowBalance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "originationFeeMantissa", type: "uint256" }],
    name: "_setOriginationFee",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "requestedState", type: "bool" }],
    name: "_setPaused",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "pendingAdmin",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "newOracle", type: "address" }],
    name: "_setOracle",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "asset", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    name: "_withdrawEquity",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "asset", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    name: "borrow",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "asset", type: "address" },
      { name: "interestRateModel", type: "address" }
    ],
    name: "_setMarketInterestRateModel",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "asset", type: "address" }],
    name: "assetPrices",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "account", type: "address" }],
    name: "getAccountLiquidity",
    outputs: [{ name: "", type: "int256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getCollateralMarketsLength",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "oracle",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "liquidationDiscount",
    outputs: [{ name: "mantissa", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "markets",
    outputs: [
      { name: "isSupported", type: "bool" },
      { name: "blockNumber", type: "uint256" },
      { name: "interestRateModel", type: "address" },
      { name: "totalSupply", type: "uint256" },
      { name: "supplyRateMantissa", type: "uint256" },
      { name: "supplyIndex", type: "uint256" },
      { name: "totalBorrows", type: "uint256" },
      { name: "borrowRateMantissa", type: "uint256" },
      { name: "borrowIndex", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "userAddress", type: "address" }],
    name: "calculateAccountValues",
    outputs: [
      { name: "", type: "uint256" },
      { name: "", type: "uint256" },
      { name: "", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "asset", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    name: "repayBorrow",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "collateralRatio",
    outputs: [{ name: "mantissa", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "newPendingAdmin", type: "address" }],
    name: "_setPendingAdmin",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }, { name: "", type: "address" }],
    name: "supplyBalances",
    outputs: [
      { name: "principal", type: "uint256" },
      { name: "interestIndex", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "originationFee",
    outputs: [{ name: "mantissa", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "account", type: "address" },
      { name: "asset", type: "address" }
    ],
    name: "getSupplyBalance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "collateralMarkets",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "asset", type: "address" },
      { name: "interestRateModel", type: "address" }
    ],
    name: "_supportMarket",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "collateralRatioMantissa", type: "uint256" },
      { name: "liquidationDiscountMantissa", type: "uint256" }
    ],
    name: "_setRiskParameters",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "asset", type: "address" }],
    name: "_suspendMarket",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "targetAccount", type: "address" },
      { name: "assetBorrow", type: "address" },
      { name: "assetCollateral", type: "address" },
      { name: "requestedAmountClose", type: "uint256" }
    ],
    name: "liquidateBorrow",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "_acceptAdmin",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "asset", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    name: "supply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "asset", type: "address" },
      { name: "requestedAmount", type: "uint256" }
    ],
    name: "withdraw",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "admin",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }, { name: "", type: "address" }],
    name: "borrowBalances",
    outputs: [
      { name: "principal", type: "uint256" },
      { name: "interestIndex", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  { payable: true, stateMutability: "payable", type: "fallback" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "account", type: "address" },
      { indexed: false, name: "asset", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
      { indexed: false, name: "startingBalance", type: "uint256" },
      { indexed: false, name: "newBalance", type: "uint256" }
    ],
    name: "SupplyReceived",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "account", type: "address" },
      { indexed: false, name: "asset", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
      { indexed: false, name: "startingBalance", type: "uint256" },
      { indexed: false, name: "newBalance", type: "uint256" }
    ],
    name: "SupplyWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "account", type: "address" },
      { indexed: false, name: "asset", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
      { indexed: false, name: "startingBalance", type: "uint256" },
      { indexed: false, name: "borrowAmountWithFee", type: "uint256" },
      { indexed: false, name: "newBalance", type: "uint256" }
    ],
    name: "BorrowTaken",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "account", type: "address" },
      { indexed: false, name: "asset", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
      { indexed: false, name: "startingBalance", type: "uint256" },
      { indexed: false, name: "newBalance", type: "uint256" }
    ],
    name: "BorrowRepaid",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "targetAccount", type: "address" },
      { indexed: false, name: "assetBorrow", type: "address" },
      { indexed: false, name: "borrowBalanceBefore", type: "uint256" },
      { indexed: false, name: "borrowBalanceAccumulated", type: "uint256" },
      { indexed: false, name: "amountRepaid", type: "uint256" },
      { indexed: false, name: "borrowBalanceAfter", type: "uint256" },
      { indexed: false, name: "liquidator", type: "address" },
      { indexed: false, name: "assetCollateral", type: "address" },
      { indexed: false, name: "collateralBalanceBefore", type: "uint256" },
      { indexed: false, name: "collateralBalanceAccumulated", type: "uint256" },
      { indexed: false, name: "amountSeized", type: "uint256" },
      { indexed: false, name: "collateralBalanceAfter", type: "uint256" }
    ],
    name: "BorrowLiquidated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldPendingAdmin", type: "address" },
      { indexed: false, name: "newPendingAdmin", type: "address" }
    ],
    name: "NewPendingAdmin",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldAdmin", type: "address" },
      { indexed: false, name: "newAdmin", type: "address" }
    ],
    name: "NewAdmin",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldOracle", type: "address" },
      { indexed: false, name: "newOracle", type: "address" }
    ],
    name: "NewOracle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "asset", type: "address" },
      { indexed: false, name: "interestRateModel", type: "address" }
    ],
    name: "SupportedMarket",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldCollateralRatioMantissa", type: "uint256" },
      { indexed: false, name: "newCollateralRatioMantissa", type: "uint256" },
      {
        indexed: false,
        name: "oldLiquidationDiscountMantissa",
        type: "uint256"
      },
      {
        indexed: false,
        name: "newLiquidationDiscountMantissa",
        type: "uint256"
      }
    ],
    name: "NewRiskParameters",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldOriginationFeeMantissa", type: "uint256" },
      { indexed: false, name: "newOriginationFeeMantissa", type: "uint256" }
    ],
    name: "NewOriginationFee",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "asset", type: "address" },
      { indexed: false, name: "interestRateModel", type: "address" }
    ],
    name: "SetMarketInterestRateModel",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "asset", type: "address" },
      { indexed: false, name: "equityAvailableBefore", type: "uint256" },
      { indexed: false, name: "amount", type: "uint256" },
      { indexed: false, name: "owner", type: "address" }
    ],
    name: "EquityWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "asset", type: "address" }],
    name: "SuspendedMarket",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "newState", type: "bool" }],
    name: "SetPaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "error", type: "uint256" },
      { indexed: false, name: "info", type: "uint256" },
      { indexed: false, name: "detail", type: "uint256" }
    ],
    name: "Failure",
    type: "event"
  }
];

var daiABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "stop",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "guy", type: "address" },
      { name: "wad", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "owner_", type: "address" }],
    name: "setOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "src", type: "address" },
      { name: "dst", type: "address" },
      { name: "wad", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "guy", type: "address" },
      { name: "wad", type: "uint256" }
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "wad", type: "uint256" }],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "name_", type: "bytes32" }],
    name: "setName",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "src", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "stopped",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "authority_", type: "address" }],
    name: "setAuthority",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "guy", type: "address" },
      { name: "wad", type: "uint256" }
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "wad", type: "uint256" }],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "dst", type: "address" },
      { name: "wad", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "dst", type: "address" },
      { name: "wad", type: "uint256" }
    ],
    name: "push",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "src", type: "address" },
      { name: "dst", type: "address" },
      { name: "wad", type: "uint256" }
    ],
    name: "move",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "start",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "authority",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "guy", type: "address" }],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "src", type: "address" },
      { name: "guy", type: "address" }
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "src", type: "address" },
      { name: "wad", type: "uint256" }
    ],
    name: "pull",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ name: "symbol_", type: "bytes32" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "guy", type: "address" },
      { indexed: false, name: "wad", type: "uint256" }
    ],
    name: "Mint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "guy", type: "address" },
      { indexed: false, name: "wad", type: "uint256" }
    ],
    name: "Burn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "authority", type: "address" }],
    name: "LogSetAuthority",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "owner", type: "address" }],
    name: "LogSetOwner",
    type: "event"
  },
  {
    anonymous: true,
    inputs: [
      { indexed: true, name: "sig", type: "bytes4" },
      { indexed: true, name: "guy", type: "address" },
      { indexed: true, name: "foo", type: "bytes32" },
      { indexed: true, name: "bar", type: "bytes32" },
      { indexed: false, name: "wad", type: "uint256" },
      { indexed: false, name: "fax", type: "bytes" }
    ],
    name: "LogNote",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "src", type: "address" },
      { indexed: true, name: "guy", type: "address" },
      { indexed: false, name: "wad", type: "uint256" }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "src", type: "address" },
      { indexed: true, name: "dst", type: "address" },
      { indexed: false, name: "wad", type: "uint256" }
    ],
    name: "Transfer",
    type: "event"
  }
];
