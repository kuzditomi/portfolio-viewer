const HISTORY_KEY = "savedImports";

interface History {
  rawImports: { [key: string]: string };
}

export class ImportHistoryService {
  private getSavedHistory(): History {
    const savedReports = localStorage.getItem(HISTORY_KEY);
    if (savedReports) {
      return JSON.parse(savedReports) as History;
    } else {
      return {
        rawImports: {}
      };
    }
  }

  private saveHistory(history: History) {
    const serializedHistory = JSON.stringify(history);
    localStorage.setItem(HISTORY_KEY, serializedHistory);
  }

  public GetRawImportKeys() {
    const history = this.getSavedHistory();

    return Object.keys(history.rawImports);
  }

  public GetRawImport(key: string) {
    const history = this.getSavedHistory();

    return history.rawImports[key];
  }

  public SaveRawImport(raw: string) {
    const history = this.getSavedHistory();

    const dateAsKey = new Date().getUTCMilliseconds().toString();
    history.rawImports[dateAsKey] = raw;

    this.saveHistory(history);
  }

  public DeleteReport(key: string) {
    const history = this.getSavedHistory();

    if (!history.rawImports[key]) {
      throw Error(`Key not found in saved history: ${key}`);
    }

    delete history.rawImports[key];

    this.saveHistory(history);
  }
}
