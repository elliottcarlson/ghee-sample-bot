import dotenv from 'dotenv';
import { Ghee, ghee } from 'ghee';

dotenv.config({ silent: true });

const token = process.env.SLACK_API_TOKEN || '';
const prefix = process.env.BOT_PREFIX || null;

class Bot extends Ghee {
  constructor(token) {
    super(token);

    this.prefix = prefix;
  }

  @ghee
  hello(args, from, channel) {
    return `Hello to you too, ${from.real_name}!`;
  }

  @ghee
  help(args, from) {
    return 'Try typing `.hello`.';
  }
}

var bot = new Bot(token);
