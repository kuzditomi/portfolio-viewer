import { Report } from "./Report";

export interface ReportException {
    message: string;
}

const TYPE_COLUMN = 0; // should contain Trades
const ACCOUNT_COLUMN = 2; // should contain nothing for own account

export class ReportParser {
    public Parse(file: File): Promise<Report> {
        let resolve: (report: Report) => void;
        let reject: (error: ReportException) => void;

        const result = new Promise<Report>((_resolve: (report: Report) => void, _reject) => { [resolve, reject] = [_resolve, _reject] });

        console.debug(`Parsing ${file.name}...`);

        var reader = new FileReader();

        reader.onload = () => {
            console.debug('File loaded.');
            let csvdata = reader.result as string;

            try {
                const report = this.ProcessData(csvdata);
                resolve(report);
            } catch {
                reject({ message: "Error while parsing..." });
            }
        };

        reader.readAsBinaryString(file);

        return result;
    }

    private ProcessData(csvData: string): Report {
        console.debug('Processing csvData...');

        const data = csvData
            .split('\n')
            .map(line => line.split(','));

        const myTrades = data.filter(line => line[TYPE_COLUMN] === 'Trades' && line[ACCOUNT_COLUMN] === '');

        console.log(myTrades);

        return {
            name: 'ok'
        }
    }
}