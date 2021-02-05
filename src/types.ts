export type DataItem = {
  时间: string;
  编号: number;
  名称: string;
  类别: string;
  星级: number;
  总次数: number;
  保底内: number;
  pool: string;
  date: number;
};

export type Data = Array<DataItem>;

export type StarCacheType = {
  [key: number]: {
    [name: string]: {
      data: Data;
    };
  };
};
export type DayCacheType = {
  [key: string]: {
    data: Data;
  };
};
export type GachaCacheType = {
  10: Array<{
    data: Data;
  }>;
  1: Data;
};
export type Source = {
  character: StarCacheType;
  weapon: StarCacheType;
  all: StarCacheType;
  gacha: GachaCacheType;
  data: Data;
  day: DayCacheType;
};
